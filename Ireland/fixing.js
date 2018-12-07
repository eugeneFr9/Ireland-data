const r = require('request-promise');
const options = {
  url: 'https://api.apify.com/v1/execs/Ryp9oDmMdMHCqGFwo/results?format=json&simplified=1',
  json: true
}
let probeObj = {
  "location": {
    "country": "Ireland",
    "city": "Dublin",
    "address": "65 Barclay Court, Blackrock, South Co. Dublin"
  },
  "size": {
    "parcel_m2": "",
    "gross_m2": "101.1",
    "net_m2": "",
    "rooms": "4"
  },
  "price": {
    "value": "650,000",
    "currency": "EUR"
  },
  "description": "\n                        Janet Carroll Estate Agents are delighted to present this superbly located and beautifully presented home which offers its new owners unrivalled lifestyle. Within a few minutes stroll of the centre of Blackrock Village, premier schools, child friendly Carnegie library, newly refurbished shopping centres and the DART.  \n\nA semi-detached home measuring circa 1089 sqft/101 sqm, number 65 is beautifully presented throughout. It was originally designed as a 4-bedroom property, but the owner has altered the footprint to create 3 superb luxurious bedrooms. This work could be easily reversed in order to reinstate the fourth bedroom. Number 65 is not overlooked at the rear and enjoys a beautiful skyline. The rear garden overlooks Rockfield park and tennis club.\n \nBarclay Court is a mature area and central to Blackrock Village, schools and a multitude of transport links. Its proximity to the sea front, public transport links to the city, Blackrock, Monkstown, Dun Laoghaire and Stillorgan offers immeasurable educational, cultural, dining and lifestyle opportunities. There is a vast well-maintained Rockfield park, with pedestrian access, playing fields, tennis courts, scenic walks and a multitude of sporting grounds for residents to enjoy. The beautiful Blackrock Park is only a few minutes stroll away.\n\nSome of South County Dublin's finest schools are within walking distance, from nursery school to UCD Smurfit business campus, DART to Trinity or the number 4 bus to DCU. Carysfort and Holly Park national schools, Newpark Comprehensive, Blackrock College, Sion Hill and St. Andrew's International school to name just a few.\n  \nAn opportunity not to be missed. Viewing is strongly recommended.\n \nSPECIAL FEATURES\n\n- Secluded low density cul de sac\n- C. 1089 sqft/101 sqm\n- Turnkey condition\n- Semi-detached\n- Originally 4 bedrooms, converted into 3 larger ones \n- Off street parking for two cars\n- Oil fired central heating\n- Fitted carpets, light fittings and kitchen appliances as listed are included\n- Close to the sea\n- Short walk to the DART \n- Air coach stop to Dublin Airport close by\n- Close to the N11, QBC bus corridor \n- Stroll of Blackrock & Frascati shopping centres\n- On the outskirts of Blackrock village\n- Walking distance of Monkstown\n- Parks and coastal walks\n- Crèches close by\n- Pedestrian access to Avondale Park & Tennis courts \n- Superb choice of schools close by (walking distance)\n\nEDUCATION\n\n- Carysfort National School \n- Hollypark National Schools\n- Booterstown National School\n- Willow Park Junior School\n- All Saint's School\n- Blackrock College\n- Dominican College Sion Hill\n- St. Andrew's International School\n- Newpark Comprehensive\n- Scoil Lorcáin\n- CBC Monkstown\n- Coláiste Íosagáin and Coláiste Eoin\n- Lycée Français d'Irlande International School\n- Choice of crèches and Montessori schools\n- UCD Smurfit Business School\n- Blackrock Further Education Institute (BFEI)\n- Cycle lanes to UCD, direct bus to DCU & DART to Trinity College\n\nACCOMMODATION \n \nEntrance Hall: c. 4.65m x 1.86m (inclusive of w/c)\nFitted carpet.\n\nGuest WC: \nWash hand basin, w/c, extractor fan.\n\nLiving Room: c. 4.91m x 4.01m\nThis room oozes comfort. A laminate floor not only looks the part but is hard wearing too. A multifuel inset stove is a fabulous addition and the crackling fire will no doubt provide a wonderful ambience when resting after a busy day.\n\nDining Room/Playroom/Den: c. 3.62m x 3.04m\nDouble doors lead to this room and it provides great versatility. Currently in use as a music room it will suit many as there is a door to the kitchen meaning those with children can have a safe play space near them.\n\nKitchen: c. 3.62m x 2.96m\nThis kitchen has plenty of wall and floor units, with stainless steel sink under a window that looks into the garden. Creda oven, Electrolux induction hob and extractor fan. Laminate floor. Door to the rear garden.\n\nUPSTAIRS\n\nLanding: c. 3.44m x 2.04m\nLinen storage press. Access door to the attic, pull down ladder with ample storage.\n\nBedroom 1: c. 3.49m x 5.97m\nThis was originally two bedrooms, but the owners cleverly created a large suite that is almost akin to a hotel room! There is scope for furniture or fitted cabinetry should one desire. Laminate floor and fitted wardrobes.\n\nBedroom 2: 3.62m x 3.04m\nFitted sliding wardrobes and fitted carpet. Window to the rear with views of the park.\n\nBedroom 3: c. 2.65m x 2.00m\nFitted carpet and fitted wardrobe. Window looking into the back garden.\n\nBathroom: c. 1.60m x 3.62m\nThis has been recently refurbished to create a large shower space framed by contemporary colour tones. Tiled floor, stainless steel heated towel rail, wash hand basin and w/c. The shower benefits from a rain head shower. This room is both contemporary and practical.\n\nOUTSIDE\n\nTo the rear, the garden is not overlooked and has the park behind it. A fabulous asset to have on your doorstep. There is also a brickwork storage shed that houses the oil tank. A side gate provides access to the front of the house. The garden measures circa 30 feet by 20 feet. Ivy with a deep red hue sits on top of the shed and is simply stunning in these Autumn months. To the front there is off street parking.\n\nThe road in front of the house has parking meters to prevent long term parking, as it is so close to the DART and the village. Only residents typically park on the road now which makes the cul de sac very quiet and residential. Disc parking is available on street for a nominal fee per car per annum.\n\nDIRECTIONS\n\nFrom Stillorgan dual carriageway, turn left onto Newtownpark Avenue. Continue along this road. Then turn left onto Temple Road/N31. Continue for approximately 290m. Then turn left onto Barclay Court. Turn right and then turn left. The house is on the left-hand side.\n\nBER DETAILS\n\nBER: D2\nBER No: 111459202\nEnergy Performance Indicator: 265.58 kWh/m²/yr\n\nVIEWING \n\nBy appointment with Janet Carroll at 087 4002020 or 01 2882020\n                    ",
  "title": "Semi-Detached HouseSemi-Detached HouseTerraced HouseEnd of Terrace House",
  "images": [
    "https://b.dmlimg.com/OWMxNGJmZjg1MmFhZmUyNGM1YTM0ZTJmMzlmZTgyM2VFMIx24iJd4ggTOtpxIDJBaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvMC8zLzAzZDFkMjQwNWU2YjRlODA5YWU4ZjNiYzg4ZTdmODI4LmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/MzNmNjZiZGNkZDMxMGNkODQ3NzI2YzFhNWYyYTQxNjOTfcaPJ9CsKog9ppMMkEh6aHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYS9iL2FiMzIxM2VjZDE1MzE4MDQyODIzZjg1ODhhNWQ5NGVmLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/ZGYzMWFmYmNjMWFjMTc5MDMxMzlhOTgyNmExNWI5ZTT63U4Ivolfvo1SzZmqjvI5aHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvZS85L2U5YjVkOWQ5ZWYzYTdhMWU1YTBiYzk2ZWU5OGZlMjI1LmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/NDY2NjBiMWY3MTdkM2RhOTY1ODI3N2Q4Yzc3YzFjOGbMHxMAEetCvUtVtHp7hwyBaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYy9lL2NlNWE4NDIyNDk4MjA2MGIzNDc0ZjFiODg5NDA2YmNiLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/NDAwMzA1ZTJlZGRlOTE4YjE5NzQ1MDEwMmUxYTRkMTcbJKT-y3oG2P1D85Ar19QjaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYi84L2I4ZTQ3ZThiNDIxMGJjOTUzMjY1NTBjNThkMTgyNTZmLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/ODgxNGU2NzY5OGEyYTYyMTg4OWFkYmI4YzAyN2YxYmKnqeJT_IM8wrfCICdd3EKBaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYy8xL2MxMGMzZmZhYTk2ZDdjMGVjNzgzNTA5M2VlOWM1MjQ0LmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/ZjRkYzcxYzBhZmUxOTI4ZDM2NTk4NmQ2NDMzZDY2NzQ0L7P3w_MdUPCvgTdkG_J9aHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvZS81L2U1ZTkzYjE3ZDYyODcwZjM0YTg1NjUzYTJlZTIzMDU1LmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/OTY3YmQzYmY4ZThmZjhkMzQzZDRkZjlkZWMzYTNhN2FE6ULVkssoHkU_fxAz8J4saHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvOC9jLzhjZjhiNzgxYjMyNjlkYjRmM2Y0MDcyODI5YjgzMGQ5LmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/ZWJjNjg2NjJhYjdlOTc1NzVmMzAzY2E0NzE4MjYyNjD24GrAa_-GULYC2ipASEIZaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvMS81LzE1YjQ2Zjk3MWFjMWZhY2VmZWI4ZjU2MjY1NzAyMDFhLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/OGIwYTI4NTBjYzJmODFlYjVlOTk4MWFjYTk4NGM0YzWIzkISp7xgdhVF1Y4TLtcxaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvNC85LzQ5MWU4M2JjNDYzNWVhMjE5MWUxZmE3M2UyZjBiNTM1LmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/ZjQ5MDZiM2JjYWJiNWFiMGI2MDhjYjJhYzZkZDBiNDWfgHbWS-DdtAwW-W2hZ8mWaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvNy9lLzdlMGQwNzMzMDk1NzQyZjcwZDA4MmIwZTY1ZDNhM2JhLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/ZmZiYmEyMTY2M2ViYjc2NGQ4M2FhYmRjODdmZmU0NDhu80W90zOFSdwXOcWtL2QQaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvNS80LzU0MzYyNzE1Zjg0NTkzZjQ3MTU4ZTNmNWVjOGY4NTRlLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/ZjQ5NTE2ZjVmZjhhMGZhNTc3MmYwNmNiMGJmMGUyZGF_EdfW0j4kWSifVhVg-SbRaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvZS9iL2ViYWU5MDE1ZDg1MWU0MDliYjc4ZGE5ZDMxOTYxMzk0LmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/ODIyNDFmNjRhZTZiODI3YTAyNzU4MGM4MGZlYmE0NThSGbJF8cm1UvEwSh3XZntkaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYS81L2E1MzUzMGZjMjY0ZDM1NTE2ZjRiNjQ0MDI1YWUyMjNhLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/YWQ1NGQ3NDc1MDcyMTQyNzEyY2QyZGIxNjcxMzJjNDV8_4ay0tyRhiab7cYgsoyOaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYi8yL2IyNWEyNDhkZWIyOTFjYzc4OWViY2U0ZTlkNDQyMTNmLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/ODhkMjZmMTk1MGRkNDFkMDAxZDA5MTNhZTdmZTg0ZmXNsXfX45k-qDUfkP3m1WClaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvMS9iLzFiZjczNWMxMDhmMjE0NTlhYTg3Mzk5Mzg3M2RiZDMyLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/MDRhMDA1MjEzZjk0NmY1YmI4MDM2ZWQ0OWU3ZWE0ODgewDuhACvgBEuasbluxSWiaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvOC83Lzg3NzEzODg3ZTk0NmYyMTE5ZGE3YTRkYmU2ZGU0NjJlLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/MjUxZmE4NWQwOGVlMzVhMmI4MjBiMmM5ZGQyYjk1ZTPtqabwunI645dHTgaCPk34aHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvNC8yLzQyODY1ZmQ1NDM0YTEyMTg0OGVhMGVkNTFmZjBjYmUzLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/Mjk0Y2I3Y2FlMzc0ZmEzMzE1MTA5NjNiZjViNGE1Mzg6XDXT7_WLfxofE4LXDsdlaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYS9mL2FmOWRiYmFlZGMyMzg0NmI4MTM2YzNhYjA5ZTJhN2I4LmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/YjFjODFiYzhhYWFkZTZmYjRmYzU5YWNmYzBjYThkY2Nw5sw04Vg-E01jwu1pbwnHaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvMy9lLzNlMGFhYWJmYjIzNTkxYmZmYTdiZmIwODUwMDYyMjljLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/ZTkxNDA4MTg1ZTg0ZmU5NzdlMDIyMjZjNTE4YTg5NDDf4fFNeH-UkSSspwhip-BEaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvZC8zL2QzNTJjY2IyZmZjODVkYTAwN2M4NzE2ZGU0NmM2NTMyLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/YmRmMTFmNmViZGUzYzViNTg5MGFjMTA1ODE3M2RkYTjCf4LsVd7Y_9pBCzCcTzq0aHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYS9lL2FlMWRiN2Y0N2EyZWQ4YjNjMWFlYjNiYWRkZWNkMmFjLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/OTI1ZTM4ZTI5ZWE4NzIxZTE1ZjAwMjIxMDdmMmRiYzlorCzzlZE8Sl5dmcaSBBZHaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvZi82L2Y2ZDhkMmFkMmEzOWMzYzE4N2ViNTE0YmQ5OTI1MGFlLmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/OWMxNGJmZjg1MmFhZmUyNGM1YTM0ZTJmMzlmZTgyM2VFMIx24iJd4ggTOtpxIDJBaHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvMC8zLzAzZDFkMjQwNWU2YjRlODA5YWU4ZjNiYzg4ZTdmODI4LmpwZ3x8fDcwMGx8fHx8fHx8.jpg",
    "https://b.dmlimg.com/MzNmNjZiZGNkZDMxMGNkODQ3NzI2YzFhNWYyYTQxNjOTfcaPJ9CsKog9ppMMkEh6aHR0cDovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL21lZGlhbWFzdGVyLXMzZXUvYS9iL2FiMzIxM2VjZDE1MzE4MDQyODIzZjg1ODhhNWQ5NGVmLmpwZ3x8fDcwMGx8fHx8fHx8.jpg"
  ],
  "url": "https://www.daft.ie/dublin/houses-for-sale/blackrock/65-barclay-court-blackrock-dublin-1925729/"
}
const gettingLocation = (obj) => {
  return r(`https://geocode.xyz/${obj.location.address}?json=1`)
    .then(data => {
      const extraObj = JSON.parse(data)
      obj.location.lat = Number(extraObj.latt);
      obj.location.lng = Number(extraObj.longt);
      return obj
    })
    .catch(error => {
      console.log(error)
    })
}

r(options)
  .then(data => {
    return Promise.all(
      data.map(house => {
        return setTimeout(gettingLocation(house), 1000)
      })
    )
  }).then(
    updatedHouses => {
      updatedHouses.map(house => {
        console.log((house))
      })
    }
  )
  .catch(error => {
    console.log(error)
  })
