const rs = require('request-promise')
const cheerio = require('cheerio')
const houseScrape = require('./scrapingHouse')



const pageScrape = function (url) {
  return rs(url)
    .then(function (html) {
      const $ = cheerio.load(html)
      const length = $('.PropertyCardContainer__container > a').length
      console.log(length)
      const urlHouses = []
      for (let i = 0; i < 19; i++) {
        urlHouses.push($('.PropertyCardContainer__container > a')[i].attribs.href)
      }
      return Promise.all(
        urlHouses.map(url => {
          return houseScrape('https://www.daft.ie' + url)
        })
      )
    })
    .then(houses => {
      console.log(houses)


    })
    .catch(error => {
      console.log(error)
    })
}

module.exports = pageScrape

