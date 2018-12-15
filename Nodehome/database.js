const mysql = require("mysql");
const connection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "user1",
  password: "12345",
  database: "houses",
  port: 3306
});
connection.connect(err => {
  if (err) {
    throw err;
  }
});
module.exports = {
  connection: connection
};
