
// This is to include today's date using moments.js
const m = moment();

console.log(m.format("ddd MMMM Mo YYYY"));
console.log(m.format("[Yeah the day is] dddd [and we're in] YYYY"));

var dt = new Date();
document.getElementById("currentDay").innerHTML = dt.toLocaleString();

var idsCollection = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4",  "#5"];
var timeSlotCollection = ["09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00",  "14:00:00",  "15:00:00",  "16:00:00",  "17:00:00"];
var shiftedTimeSlotCollection = ["10:00:00", "11:00:00", "12:00:00", "13:00:00",  "14:00:00",  "15:00:00",  "16:00:00",  "17:00:00",  "18:00:00"];

var  plannerContent = [];
var getLocalStorageData = JSON.parse(localStorage.getItem("planner-items"));

if (getLocalStorageData !== null) {
 plannerContent = getLocalStorageData;
}

for (var i=0;i<idsCollection.length; i++) {
  var descriptionEl = $(idsCollection[i]);
  var buttonEl = descriptionEl.parent().parent().find("button");

  if ((moment().format('MMMM Do YYYY, HH:mm:ss')) < (moment().format('MMMM Do YYYY') +  ", " + timeSlotCollection[i])) { 
    descriptionEl.attr("class", "future");
    plannerContent.forEach(function(item) {
      if (idsCollection[i] === ("#" + (item["input-id"]))) {
        descriptionEl.val(item["input-value"]);
      }
    });
  }
  else if (((moment().format('MMMM Do YYYY, HH:mm:ss')) >= (moment().format('MMMM Do YYYY') +  ", " + timeSlotCollection[i])) &&  
          ((moment().format('MMMM Do YYYY, HH:mm:ss')) < (moment().format('MMMM Do YYYY') +  ", " + shiftedTimeSlotCollection[i])))
  {
    descriptionEl.attr("class", "present");
    $(".present").attr("disabled", "disabled");
    buttonEl.attr("disabled", true);
    plannerContent.forEach(function(item) {
      if (idsCollection[i] === ("#" + item["input-id"])) {
        descriptionEl.val(item["input-value"]);
      }
    });
  }
  else if ((moment().format('MMMM Do YYYY, HH:mm:ss')) > (moment().format('MMMM Do YYYY') +  ", " + timeSlotCollection[i])) {
    descriptionEl.attr("class", "past");
    $(".past").attr("disabled", "disabled");
    buttonEl.attr("disabled", true);
  }
}

$("button").on("click", function() {
  event.preventDefault();
  var container = $(this).parent().parent();  
  var inputValue = container.find("input").val();
  var inputId = container.find("input").attr("id");
  var textObj = {
    "input-id": inputId,
    "input-value": inputValue };
  
  if (textObj["input-value"] !== "") {
    plannerContent.push(textObj);
    localStorage.setItem("planner-items", JSON.stringify(plannerContent));
  }
});
//FOR ADRIANA TO REMEBER this below is a string
let content = getDatesBetween("2020/01/01", "2021/01/01");
document.getElementById("calender").innerHTML = content;
