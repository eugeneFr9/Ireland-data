const connection = require("./database.js").connection;
const validator = require("validator");
const report = {
  valid: "",
  failedTotal: "",
  errorType1: {
    message: "Invalid url",
    rows: []
  },
  errorType2: {
    message: "One or more required fields and values are missing",
    rows: []
  }
};
const checkURL = el => {
  if (validator.isURL(el.url)) {
    return true;
  } else {
    report.errorType1.rows.push(el);
    return false;
  }
};
const checkFields = el => {
  if (
    el.hasOwnProperty("location") &&
    el.location.hasOwnProperty("country") &&
    el.location.country &&
    (el.location.hasOwnProperty("city") && el.location.city) &&
    (el.location.hasOwnProperty("address") && el.location.address) &&
    (el.hasOwnProperty("size") &&
      el.size.hasOwnProperty("gross_m2") &&
      el.size.gross_m2) &&
    (el.size.hasOwnProperty("rooms") && el.size.rooms) &&
    (el.hasOwnProperty("price") &&
      el.price.hasOwnProperty("value") &&
      el.price.value) &&
    (el.price.hasOwnProperty("currency") && el.price.currency) &&
    (el.hasOwnProperty("url") && el.url) &&
    (el.hasOwnProperty("market_date") && el.market_date)
  ) {
    return true;
  } else {
    report.errorType2.rows.push(el);
    return false;
  }
};
const normalization = data => {
  for (const el of data) {
    el.link = el.url ? el.url : el.link;
    if (el.url) {
      delete el.url;
    }
    el.size.rooms =
      typeof el.size.rooms === "number" ? el.size.rooms : Number(el.size.rooms);
    el.size.parcel_m2 =
      typeof el.size.parcel_m2 === "number"
        ? el.size.parcel_m2
        : Number(el.size.parcel_m2);
    el.size.net_m2 = null;
    el.size.gross_m2 =
      typeof el.size.gross_m2 === "number"
        ? el.size.gross_m2
        : Number(el.size.gross_m2);
    el.price.value =
      typeof el.price.value === "number"
        ? el.price.value
        : Number(el.price.value.replace(/,/g, ""));
    el.description = el.description.trim();
    if (el.location.coordinates.lat && el.location.coordinates.lng) {
      if (
        typeof el.location.coordinates.lat !== "number" &&
        typeof el.location.coordinates.lng !== "number"
      ) {
        el.location.coordinates.lat = Number(el.location.coordinates.lat);
        el.location.coordinates.lng = Number(el.location.coordinates.lng);
        const lat = el.location.coordinates.lat;
        const lng = el.location.coordinates.lng;
        el.location.coordinates.lat = lat < 90 && lat > -90 ? lat : null;
        el.location.coordinates.lng = lng < 180 && lng > -180 ? lng : null;
      }
    }
  }
  return data;
};
const dbInsert = data => {
  data.forEach(house => {
    const insertHouse = {
      House_id: Math.random()
        .toString()
        .slice(2, 15),
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
    connection.query("INSERT INTO Houses_ireland", insertHouse, function(
      err,
      result,
      fields
    ) {
      if (err) {
        throw err;
      }
      console.log("properties have been inserted into DB");
    });
    if (house.images) {
      house,
        images.forEach(images => {
          const insertImages = {
            Img_id: Math.random()
              .toString()
              .slice(2, 10),
            Img_link: image,
            House_id: insertHouse.House_id
          };
          connection.query("INSERT INTO Images", insertImages, function(
            err,
            result,
            fields
          ) {
            if (err) {
              throw err;
            }
          });
        });
    }
  });
};
const main = data => {
  data.filter(checkURL);
  const checkedData = data.filter(checkFields);
  const dataPreparedDB = normalization(checkedData);
  report.valid = checkedData.length;
  report.failedTotal = data.length - checkedData.length;
  //dbInsert(dataPreparedDB);
};
module.exports = {
  report,
  main
};
