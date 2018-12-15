function convertDate(data) {
  let array = data.split(".");
  // const dataObj = new Date(array[2], array[1] - 1, array[0]);
  /* let month = "" + (dataObj.getMonth() + 1);
  let day = "" + dataObj.getDate();
  let year = "" + dataObj.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;*/
  return [array[2], array[1], array[0]].join("-");
}

module.exports = convertDate;
