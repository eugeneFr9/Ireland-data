const rs = require('request-promise')
const cheerio = require('cheerio')
const itemScrape = require('./scrapingItem')

const pageScrape = function (url) {
  return rs(url)
    .then(function (html) {
      const $ = cheerio.load(html)
      const length = $('.PropertyCardContainer__container > a').length
      const urlProperty = []
      for (let i = 0; i < length; i++) {
        urlProperty.push($('.PropertyCardContainer__container > a')[i].attribs.href)
      }
      return Promise.all(
        urlProperty.map(url => {
          return itemScrape('https://www.daft.ie' + url)
        })
      )
    })
    .then(houses => {
      houses.map(house =>
        //console.log(houses.indexOf(house), house))
        console.log(JSON.stringify(house)))

    }

    )
    .catch(error => {
      console.log(error)
    })
}

module.exports = pageScrape

