const r = require('request-promise');
const url = 'https://api.apify.com/v1/execs/qA3fqEsmvijPDeJ4e/results?format=json&simplified=1'
const fs = require('fs')
async function addExtraCoordinates(el) {
  try {
    const addressForCoordinates = el.location.address
    const neededURL = 'https://geocode.xyz/' + addressForCoordinates + 'auth=80218576969521178858x1424 ';
    const coordinates = JSON.parse(await r(neededURL))
    return coordinates

  } catch (e) {
    console.log(e)
  }
}

const validateHouses = (el) => {
  return (el.hasOwnProperty('location') && el.location.hasOwnProperty('country') && typeof el.location.country !== 'undefined') &&
    (el.location.hasOwnProperty('city') && typeof el.location.city !== 'undefined') &&
    (el.hasOwnProperty('url') && el.url.startsWith('https://')) &&
    (el.location.hasOwnProperty('address') && el.location.address) &&
    (el.hasOwnProperty('size') && el.size.hasOwnProperty('gross_m2') && typeof el.size.gross_m2 !== 'undefined') &&
    (el.hasOwnProperty('price') && el.price.hasOwnProperty('value') && el.price.value) &&
    (el.price.hasOwnProperty('currency') && el.price.currency) &&
    (el.hasOwnProperty('market_date') && el.market_date)
}

const normalization = async (data) => {
  const validHouses = data.filter(validateHouses)
  for (const el of validHouses) {
    try {
      console.log(el.price.value)
      el.location.coordinates = { lat: '', lng: '' }
      el.link = el.url
      delete el.url
      el.size.rooms = Number(el.size.rooms),
        el.size.gross_m2 = Number(el.size.gross_m2),
        el.price.value = Number(el.price.value.replace(/,/g, '.')),
        el.description = el.description.replace(/\n/g, '').trim();
      const extraCoordinates = await addExtraCoordinates(el)
      el.location.coordinates.lat = extraCoordinates.latt;
      el.location.coordinates.lng = extraCoordinates.longt;
      el.market_date = el.market_date.replace(/./g, '-')
    } catch (error) {
      console.log(error)
    }
  }
  return validHouses;
}

(async () => {
  try {
    const data = JSON.parse(await r(url))
    let normalizedData = await normalization(data)
    fs.writeFile('./apify-houseInfo.json', JSON.stringify(normalizedData), err => {
      if (err) throw err;
      console.log('It\'s written!')
    })
  } catch (error) {
    console.log(error)
  }
})()
