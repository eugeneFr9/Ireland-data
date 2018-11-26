const rs = require('request-promise');
const pageScrape = require('./scrapingPage')
const pages = [
  'https://www.daft.ie/dublin-city/houses-for-sale/',
  'https://www.daft.ie/dublin-city/houses-for-sale/?offset=20',
  'https://www.daft.ie/dublin-city/houses-for-sale/?offset=40',
  'https://www.daft.ie/dublin-city/houses-for-sale/?offset=60',
  'https://www.daft.ie/dublin-city/houses-for-sale/?offset=80',
  'https://www.daft.ie/dublin-city/houses-for-sale/?offset=100'

]

Promise.all(
  pages.forEach(page => {
    return pageScrape(page)
  })
)
  .then(data => data.map(dataArray => {
    console.log(dataArray)
  })
  )
  .catch(error => console.log(error.message))