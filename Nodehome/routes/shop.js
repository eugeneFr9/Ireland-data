const path = require("path");
const connection = require("../database.js").connection;
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/searchData", (req, res, next) => {
  if (req.query.city) {
    const city = req.query.city;
    console.log(city);
    const query = `SELECT * FROM Houses_Ireland WHERE City='${city}'`;
    console.log(query);
    connection.query(query, function(error, result, fields) {
      if (error) {
        console.log(error);
        return res.status(400).end();
      }
      const list = result;
      const queryStats = `SELECT Market_date AS Date, COUNT(Link) AS Quantity, SUM(Value_) AS Total_Price FROM Houses_Ireland WHERE City='${city}' GROUP BY Market_date`;
      console.log(queryStats);
      connection.query(queryStats, function(err, result, fields) {
        if (err) {
          console.log(err);
          return res.status(400).end();
        }
        const data = {
          list,
          avg_price: result
        };
        const average = [];
        let sum = 0;
        let numberOfHouses = 0;
        for (i = 0; i < data.avg_price.length; i++) {
          sum += data.avg_price[i].Total_Price;
          numberOfHouses += data.avg_price[i].Quantity;
          const avg = sum / numberOfHouses;
          data.avg_price[i].average = avg;
          console.log(data.avg_price[i].Date);
          const avg_obj = {
            day: data.avg_price[i].Date.toLocaleString(),
            subCount: numberOfHouses,
            subTotal: sum,
            avg_price: avg
          };
          average.push(avg_obj);
        }
        console.log(average);
        console.log(average.length);
        const today = new Date();
        const firstDay = today.getTime() - 10 * 24 * 60 * 60 * 1000;
        const filtered = average.filter(el => {
          let convDate = new Date(el.day).getTime();
          return convDate >= firstDay && convDate <= today.getTime();
        });
        data.avg_price = filtered;
        console.log(data.avg_price.length);
        res.json({ message: data });
      });
    });
  } else {
    connection.query("SELECT * FROM Houses_Ireland", function(
      error,
      result,
      fields
    ) {
      if (error) {
        console.log(error);
        return res.status(400).end();
      }
      const list = result;
      connection.query(
        "SELECT Market_date AS Date, COUNT(Link) AS Quantity, SUM(Value_) AS Total_Price FROM Houses_Ireland GROUP BY Market_date",
        function(err, result, fields) {
          if (err) {
            console.log(err);
            return res.status(400).end();
          }
          const data = {
            list,
            avg_price: result
          };
          const average = [];
          let sum = 0;
          let numberOfHouses = 0;
          for (i = 0; i < data.avg_price.length; i++) {
            sum += data.avg_price[i].Total_Price;
            numberOfHouses += data.avg_price[i].Quantity;
            const avg = sum / numberOfHouses;
            data.avg_price[i].average = avg;
            const day = data.avg_price[i].Date.getDate() + 1;
            const date = data.avg_price[i].Date.setDate(day);
            const avg_obj = {
              day: new Date(date),
              subCount: numberOfHouses,
              subTotal: sum,
              avg_price: avg
            };
            average.push(avg_obj);
          }
          console.log(average);
          console.log(average.length);
          const today = new Date();
          const firstDay = today.getTime() - 10 * 24 * 60 * 60 * 1000;
          const filtered = average.filter(el => {
            let convDate = new Date(el.day);
            return convDate >= firstDay && convDate <= today.getTime();
          });
          data.avg_price = filtered;
          console.log(data.avg_price.length);
          res.json({ message: data });
        }
      );
    });
  }
});
router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "mainpage.html"));
});

module.exports = router;
