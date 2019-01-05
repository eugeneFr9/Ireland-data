const path = require("path");
const Port = process.env.Port || 3000;
const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");
const app = express();
//app.use(cors());
app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(Port, () => {
  console.log(`app is running at http://localhost:${Port}`);
});
