const rs = require('request-promise');
const cheerio = require('cheerio');


const itemScrape = function (uri) {
  return rs(uri)
    .then(function (html) {
      //map house properties
      const $ = cheerio.load(html)
      const address = $('.PropertyMainInformation__address').text();
      const housePriceIndex = $('.PropertyInformationCommonStyles__costAmountCopy').text().indexOf('€')
      const price = $('.PropertyInformationCommonStyles__costAmountCopy').text().slice(housePriceIndex + 1)
      const indexHouseSize = $('.PropertyOverview__propertyOverviewDetails').text().indexOf('Area')
      const size = indexHouseSize !== -1 ? $('.PropertyOverview__propertyOverviewDetails').text().substr(indexHouseSize).split(':')[1].trim().split(' ')[0] : null;
      let type;
      if (uri.indexOf('house') === -1) {
        type = true
      } else {
        type = false
      }
      return {
        address,
        price,
        size,
        isApartment: type
      }

    })
    .catch(function (error) {
      console.log(error)
    });
}


module.exports = itemScrape