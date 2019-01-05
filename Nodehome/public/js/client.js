const button = document.querySelector("button");
button.addEventListener("click", function() {
  const city = document.getElementById("city_select").value;
  if (city) {
    fetch(`http://localhost:3000/searchData?city=${city}`)
      .then(obj => obj.json())
      .then(obj => renderToClient(obj))
      .catch(err => console.log(err));
  } else {
    fetch("http://localhost:3000/searchData")
      .then(obj => obj.json())
      .then(obj => renderToClient(obj))
      .catch(err => console.log(err));
  }
});

function createAndAppend(name, parent, options = {}) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.keys(options).forEach(key => {
    if (key === "text") {
      elem.innerHTML = options[key];
    } else {
      elem.setAttribute(key, options[key]);
    }
  });
  return elem;
}

function DateToday(dateObj) {
  let day = "" + dateObj.getDate();
  let month = "" + (dateObj.getMonth() + 1);
  let year = "" + dateObj.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
}
function renderToClient(obj) {
  obj.message.avg_price.forEach(el => {
    const index = el.day.indexOf(",");
    el.day = el.day.slice(0, index);
  });
  let lastAvg = null;
  let currentIndex = 0;
  let increment = 1 * 24 * 60 * 60 * 1000;
  const max = new Date();
  const min = max.getTime() - 10 * 24 * 60 * 60 * 1000;
  const days = [];
  for (let day = min; day < max.getTime(); day += increment) {
    days.push(new Date(day + 1 * 24 * 60 * 60 * 1000).toLocaleString());
  }
  const newDays = days.map(el => {
    const index = el.indexOf(",");
    return el.slice(0, index);
  });
  for (el of obj.message.avg_price) {
    el.day = newDays.indexOf(el.day) + 1;
  }
  const values = [];
  for (let day = 1; day <= 10; day++) {
    if (day >= obj.message.avg_price[currentIndex].day) {
      lastAvg = obj.message.avg_price[currentIndex].avg_price;
      if (currentIndex < obj.message.avg_price.length - 1) {
        currentIndex++;
      }
    }
    values.push(lastAvg);
  }
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "line",

    data: {
      labels: newDays,
      datasets: [
        {
          label: "Average price for the last 10 days",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: values
        }
      ]
    },

    options: {}
  });
  const container = document.getElementById("table_properties");
  container.innerHTML = "";
  const innerTable = createAndAppend("table", container);
  const headersRow = createAndAppend("tr", innerTable);
  createAndAppend("th", headersRow, { text: "Country" });
  createAndAppend("th", headersRow, { text: "City" });
  createAndAppend("th", headersRow, { text: "Address" });
  createAndAppend("th", headersRow, { text: "Latitude" });
  createAndAppend("th", headersRow, { text: "Longitude" });
  createAndAppend("th", headersRow, { text: "Size" });
  createAndAppend("th", headersRow, { text: "Rooms" });
  createAndAppend("th", headersRow, { text: "Price" });
  createAndAppend("th", headersRow, { text: "Currency" });
  createAndAppend("th", headersRow, { text: "Market_date" });
  for (house of obj.message.list) {
    const rowData = createAndAppend("tr", innerTable);
    createAndAppend("td", rowData, { text: house.Country });
    createAndAppend("td", rowData, { text: house.City });
    createAndAppend("td", rowData, { text: house.Address_ });
    createAndAppend("td", rowData, { text: house.Lat });
    createAndAppend("td", rowData, { text: house.Lng });
    createAndAppend("td", rowData, { text: house.Gross_m2 });
    createAndAppend("td", rowData, { text: house.Rooms });
    createAndAppend("td", rowData, { text: house.Value_ });
    createAndAppend("td", rowData, { text: house.Currency });
    createAndAppend("td", rowData, {
      text: DateToday(new Date(house.Market_date))
    });
  }
}
