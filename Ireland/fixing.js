// 'https://api.apify.com/v1/execs/qA3fqEsmvijPDeJ4e/results?format=json&simplified=1"
const r = require("request-promise");
const connection = require("../Nodehome/database.js").connection;
const url =
  "https://api.apify.com/v1/execs/5rpdzP6jP9Px2xuWB/results?format=json&simplified=1";
const fs = require("fs");
const convertDate = require("../experiment.js");
async function addExtraCoordinates(el) {
  try {
    const addressForCoordinates = el.location.address;
    const neededURL =
      "https://geocode.xyz/" +
      addressForCoordinates +
      "?auth=80218576969521178858x1424&json=1";
    const coordinates = JSON.parse(await r(neededURL));
    return coordinates;
  } catch (e) {
    console.log(e);
  }
}

const validateHouses = el => {
  return (
    el.hasOwnProperty("location") &&
    el.location.hasOwnProperty("country") &&
    typeof el.location.country !== "undefined" &&
    (el.location.hasOwnProperty("city") &&
      typeof el.location.city !== "undefined") &&
    (el.hasOwnProperty("url") && el.url.startsWith("https://")) &&
    (el.location.hasOwnProperty("address") && el.location.address) &&
    (el.hasOwnProperty("size") &&
      el.size.hasOwnProperty("gross_m2") &&
      typeof el.size.gross_m2 !== "undefined") &&
    (el.hasOwnProperty("price") &&
      el.price.hasOwnProperty("value") &&
      el.price.value) &&
    (el.price.hasOwnProperty("currency") && el.price.currency) &&
    (el.hasOwnProperty("market_date") && el.market_date)
  );
};

const normalization = async data => {
  const validHouses = data.filter(validateHouses);
  for (const el of validHouses) {
    try {
      el.location.coordinates = { lat: "", lng: "" };
      el.link = el.url;
      delete el.url;
      el.size.rooms = Number(el.size.rooms);
      el.size.parcel_m2 = null;
      el.size.net_m2 = null;
      el.size.gross_m2 = Number(el.size.gross_m2);
      el.price.value = Number(el.price.value.replace(/,/g, ""));
      el.description = null;
      const extractCoordinates = await addExtraCoordinates(el);
      const lat = Number(extractCoordinates.latt);
      const lng = Number(extractCoordinates.longt);
      el.location.coordinates.lat = lat < 90 && lat > -90 ? lat : null;
      el.location.coordinates.lng = lng < 180 && lng > -180 ? lng : null;
      el.market_date = convertDate(el.market_date);
    } catch (error) {
      console.log(error);
    }
  }
  return validHouses;
};
function insertIntoDB(data) {
  data.forEach(house => {
    const ObjectInsert = {
      Link: house.link,
      Country: house.location.country,
      City: house.location.city,
      Address_: house.location.address,
      Lat: house.location.coordinates.lat,
      Lng: house.location.coordinates.lng,
      Parcel_m2: house.size.parcel_m2,
      Gross_m2: house.size.gross_m2,
      Net_m2: house.size.net_m2,
      Rooms: house.size.rooms,
      Value_: house.price.value,
      Currency: house.price.currency,
      Description_: house.description,
      Title: house.title,
      Market_date: house.market_date
    };
    connection.query(
      "REPLACE INTO Houses_Ireland SET ?",
      ObjectInsert,
      function(error, results, fields) {
        if (error) {
          throw error;
        }
      }
    );

    house.images.forEach(image => {
      const objectImageInsert = {
        Img_id: Math.random()
          .toString()
          .slice(2, 10),
        Img_link: image,
        House_link: ObjectInsert.Link
      };
      connection.query("REPLACE INTO Images SET ?", objectImageInsert, function(
        error,
        results,
        fields
      ) {
        if (error) {
          throw error;
        }
      });
    });
  });
  //connection.query("CREATE TABLE IF NOT EXISTS Stats SELECT Market_date AS Date, COUNT(Links) AS Quantity, SUM(Value_) AS Total_Price FROM Houses_Ireland GROUP BY Market_date")
  connection.end();
}

(async () => {
  try {
    const data = JSON.parse(await r(url));
    let normalizedData = await normalization(data);
    fs.writeFile("./listHouses.json", JSON.stringify(normalizedData), err => {
      if (err) throw err;
      console.log("Done!");
    });
    insertIntoDB(normalizedData);
  } catch (error) {
    console.log(error);
  }
})();
