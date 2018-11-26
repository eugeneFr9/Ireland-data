const rs = require('request-promise')
const cheerio = require('cheerio')
const apartmentScrape = require('./scrapingApartment')
const fs = require('fs')



const pageScrapeAp = function (url) {
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
          return apartmentScrape('https://www.daft.ie' + url)
        })
      )
    })
    .then(apartments => {
      apartments.map(apartment =>
        //console.log(houses.indexOf(apartment), apartment))
        console.log(JSON.stringify(apartment))

      )
    })
    .catch(error => {
      console.log(error)
    })
}

module.exports = pageScrapeAp