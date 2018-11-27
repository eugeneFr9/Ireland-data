const rs = require('request-promise')
const cheerio = require('cheerio')
const houseScrape = require('./scrapingHouse')
const fs = require('fs')



const pageScrape = function (url) {
  return rs(url)
    .then(function (html) {
      const $ = cheerio.load(html)
      const length = $('.PropertyCardContainer__container > a').length
      const urlHouses = []
      for (let i = 0; i < length; i++) {
        urlHouses.push($('.PropertyCardContainer__container > a')[i].attribs.href)
      }
      return Promise.all(
        urlHouses.map(url => {
          return houseScrape('https://www.daft.ie' + url)
        })
      )
    })
    .then(houses => {
      const info = houses.map(house =>
        //console.log(houses.indexOf(house), house))
      JSON.stringify(house))
      fs.appendFileSync('./houses.json', info)
    }

    )
    .catch(error => {
      console.log(error)
    })
}

module.exports = pageScrape

