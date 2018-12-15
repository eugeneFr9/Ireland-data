const path = require("path");
const r = require("request-promise");
const report = require("../helper.js").report;
const main = require("../helper.js").main;
const express = require("express");
const validator = require("validator");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-data => GET
router.get("/add-data", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-data.html"));
});

// /admin/add-data => POST
router.post("/add-data", (req, res, next) => {
  console.log(req.body.link);
  if (req.body.message && validator.isJSON(req.body.message)) {
    try {
      const data = JSON.parse(req.body.message);
      main(data);
      res.json({ report });
    } catch (err) {
      console.log(err);
      res.status(400).end();
    }
  } else if (req.body.link && validator.isURL(req.body.link)) {
    try {
      (async link => {
        const data = JSON.parse(await r(link));
        main(data);
      })(req.body.link);
    } catch (err) {
      console.log(err);
      res.status(400).end();
    }
  } else if (req.body.link && req.body.message) {
    res.status(400).json({ message: "Only one field should be filled in" });
  } else {
    res.status(400).json({ message: "invalid input or empty fields" });
  }
});

exports.routes = router;
