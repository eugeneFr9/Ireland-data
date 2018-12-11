const r = require('request-promise');
const url = 'https://api.apify.com/v1/execs/qA3fqEsmvijPDeJ4e/results?format=json&simplified=1'
const fs = require('fs')
const mysql = require('mysql')
async function addExtraCoordinates(el) {
  try {
    const addressForCoordinates = el.location.address
    const neededURL = 'https://geocode.xyz/' + addressForCoordinates + '?auth=80218576969521178858x1424&json=1';
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
      el.location.coordinates = { lat: '', lng: '' }
      el.link = el.url
      delete el.url
      el.size.rooms = Number(el.size.rooms),
        el.size.gross_m2 = Number(el.size.gross_m2),
        el.price.value = Number(el.price.value.replace(/,/g, '.')),
        el.description = el.description.replace(/\n/g, '').trim();
      const extraCoordinates = await addExtraCoordinates(el)
      el.location.coordinates.lat = Number(extraCoordinates.latt);
      el.location.coordinates.lng = Number(extraCoordinates.longt);
      el.market_date = el.market_date.replace(/./g, '-')
    } catch (error) {
      console.log(error)
    }
  }
  return validHouses;
}
function insertIntoDB(data) {
  var connection = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    user: 'user2',
    password: '12345',
    database: 'houses',
    port: 3306
  });

  connection.connect();

  data.forEach(house => {

    const ObjectInsert = {
      Link: house.link,
      Country: house.location.country,
      City: house.location.city,
      Address_: house.location.address,
      Lat: house.location.coordinates.lat,
      Lng: house.location.coordinates.lng,
      Parcel_m2: house.size.parcel_m2,
      Gross_m2: house.size.gross_m2,
      Net_m2: house.size.net_m2,
      Rooms: house.size.rooms,
      Value_: house.price.value,
      Currency: house.price.currency,
      Description_: house.description,
      Title: house.title,
      Market_date: house.market_date
    };

    connection.query('INSERT INTO houses_ireland SET ?', ObjectInsert, function (error, results, fields) {
      if (error) { throw error };
    });

    house.images.forEach(image => {

      const objectImageInsert = {
        Img_id: Math.random().toString().slice(2, 10),
        Img_link: image,
        House_link: ObjectInsert.Link
      }

      connection.query('INSERT INTO images SET ?', objectImageInsert, function (error, results, fields) {
        if (error) { throw error };
      });
    })
  })

  connection.end();
}

(async () => {
  try {
    const data = JSON.parse(await r(url))
    let normalizedData = await normalization(data)
    fs.writeFile('./listHouses.json', JSON.stringify(normalizedData), err => {
      if (err) throw err;
      console.log('Done!')
    })
    insertIntoDB(normalizedData)
  } catch (error) {
    console.log(error)
  }
})()
