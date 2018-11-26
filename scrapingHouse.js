const rs = require('request-promise');
const cheerio = require('cheerio');


const houseScrape = function (uri) {
  return rs(uri)
    .then(function (html) {
      const $ = cheerio.load(html)
      const houseAddress = $('.PropertyMainInformation__address').text();
      const housePriceIndex = $('.PropertyInformationCommonStyles__costAmountCopy').text().indexOf('€')
      const housePrice = $('.PropertyInformationCommonStyles__costAmountCopy').text().slice(housePriceIndex + 1)
      const indexHouseSize = $('.PropertyOverview__propertyOverviewDetails').text().indexOf('Area')
      const houseSize = $('.PropertyOverview__propertyOverviewDetails').text().substr(indexHouseSize).split(':')[1].trim().split(' ')[0]
      return {
        address: houseAddress,
        price: housePrice,
        size: houseSize
      }

    })
    .catch(function (error) {
      console.log(error)
    });
}


module.exports = houseScrape