const rs = require('request-promise');
const cheerio = require('cheerio');


const apartmentScrape = function (uri) {
  return rs(uri)
    .then(function (html) {
      const $ = cheerio.load(html)
      const apartmentAddress = $('.PropertyMainInformation__address').text();
      const apartmentPriceIndex = $('.PropertyInformationCommonStyles__costAmountCopy').text().indexOf('€')
      const apartmentPrice = $('.PropertyInformationCommonStyles__costAmountCopy').text().slice(apartmentPriceIndex + 1)
      const indexApartmentSize = $('.PropertyOverview__propertyOverviewDetails').text().indexOf('Area')
      const apartmentSize = indexApartmentSize !== -1 ? $('.PropertyOverview__propertyOverviewDetails').text().substr(indexApartmentSize).split(':')[1].trim().split(' ')[0] : null;
      return {
        address: apartmentAddress,
        price: apartmentPrice,
        size: apartmentSize,
        type: 'apartment'
      }

    })
    .catch(function (error) {
      console.log(error)
    });
}


module.exports = apartmentScrape