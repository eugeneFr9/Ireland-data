const pageScrape = require('./scrapingPage')
const pages = [
  'https://www.daft.ie/dublin-city/houses-for-sale/',
  'https://www.daft.ie/dublin-city/houses-for-sale/?offset=20',
  'https://www.daft.ie/dublin-city/houses-for-sale/?offset=40',
  'https://www.daft.ie/dublin-city/houses-for-sale/?offset=60',
  'https://www.daft.ie/dublin-city/houses-for-sale/?offset=80',
  'https://www.daft.ie/dublin-city/houses-for-sale/?offset=100'

]


pages.forEach(async page => {
  try {
    await pageScrape(page)
  }

  catch (e) {
    console.log(e)
  }
})