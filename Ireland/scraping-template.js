https://www.daft.ie/dublin-city/houses-for-sale/
property https://www.daft.ie/dublin/houses-for-sale/[.*]
page https://www.daft.ie/dublin-city/houses-for-sale/?offset=[\d+]
.PropertyInformationCommonStyles__propertyPrice a, .next_page a
function pageFunction(context) {
  // called on every page the craw
  var $ = context.jQuery;
  if(context.request.label === 'property') {
      var housePriceIndex = $('.PropertyInformationCommonStyles__costAmountCopy').text().indexOf('€');
      var price = housePriceIndex !== -1 ? $('.PropertyInformationCommonStyles__costAmountCopy').text().slice(housePriceIndex + 1) : '';
      var images = $('li.pbxl_carousel_item img');
      var imgArr = [];
      for (var i = 0; i < images.length; i++) {
          var img = $(images[i]);
          var src = img.attr('src');
          imgArr.push(src);
      }
      var indexHouseSize = $('.PropertyOverview__propertyOverviewDetails').text().indexOf('Area');
      var size = indexHouseSize !== -1 ? $('.PropertyOverview__propertyOverviewDetails').text().substr(indexHouseSize).split(':')[1].trim().split(' ')[0] : '';
      var result = {
      location: {
          country: 'Ireland',
          city: 'Dublin',
          address: $('.PropertyMainInformation__address').text(),
          coordinates: {
              lat: '',
              lng: ''
          }
         
      },
      size: {
          parcel_m2: '',
          gross_m2: size,
          net_m2: '',
          rooms: $('.QuickPropertyDetails__iconCopy').text()
      },
      price: {
          value: price,
          currency: 'EUR'
      },
      description: $('p.PropertyDescription__propertyDescription.is-expandable').text(),
      title: $('.QuickPropertyDetails__propertyType').text(),
      images: imgArr,
      market_date: $('.PropertyStatistics__iconsContainer div:first-of-type .PropertyStatistics__iconData').text()
      
  };

return result;
  } else {
      context.skipOutput();
  }
}
