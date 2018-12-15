const path = require("path");
const connection = require("../database.js").connection;
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/searchData", (req, res, next) => {
  if (req.query.city) {
    res.json({ message: `houses of ${req.query.city}` });
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
        "SELECT AVG(Value_) AS avg_price ,Market_date AS date FROM Houses_Ireland GROUP BY Market_date",
        function(err, result, fields) {
          if (err) {
            console.log(err);
            return res.status(400).end();
          }
          const data = {
            list,
            avg_price: result
          };
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
