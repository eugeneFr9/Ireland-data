const r = require('request-promise');
const options = {
  url: 'https://api.apify.com/v1/execs/Ryp9oDmMdMHCqGFwo/results?format=json&simplified=1',
  json: true
}

const gettingLocation = (obj) => {
  return r(`https://geocode.xyz/${obj.location.address}?json=1`)
    .then(data => {
      const extraObj = JSON.parse(data)
      obj.location.lat = Number(extraObj.latt);
      obj.location.lng = Number(extraObj.longt);
      return obj
    })
    .catch(error => {
      console.log(error)
    })
}

r(options)
  .then(data => {
    return Promise.all(
      data.map(house => {
        return setTimeout(gettingLocation(house), 1000)
      })
    )
  }).then(
    updatedHouses => {
      updatedHouses.map(house => {
        console.log((house))
      })
    }
  )
  .catch(error => {
    console.log(error)
  })
