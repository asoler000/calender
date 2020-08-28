
// This is to include today's date using moments.js


const m = moment();

console.log(m.format("ddd MMMM Mo YYYY"));
console.log(m.format("[Yeah the day is] dddd [and we're in] YYYY"));

var dt = new Date();
document.getElementById("currentDay").innerHTML = dt.toLocaleString();

//This is the calender function 
function settingDate(date, day) {
    date = new Date(date);
    date.setdate(day);
    date.setHours(23);
}
function getDatesBetween(date1, date2) {
    //FOR ADRIANA THIS BELOW IS CONVERTING THE STRINGS TO date OBJECTS
    let range1 = new Date(date1);
    let range2 = Date(date2);
    date1 = settingDate(date1, 31);
    date2 = settingDate(date2, 31);
    let temp;
    let dates = [];
    // write a loop for the end of dates and months
    while (date1 <= date2) {
        //this one below is for April and February since there is not 31 days
        if (date1.getDate() != 31) {
            temp = settingDate(date1, 0);
            if (temp >= range1 && temp <= range2) dates.push(temp);
            date1 = settingDate(date1, 31);
        } else {
            temp = new Date(date1);
            if (temp >= range1 && temp < +range2) dates.push(temp);
            date1.setMonth(date1.getMonth() + 1);
        }
    }
    let content = "";
    //weekday objects
    let weekDays = [
        { shortDay: "Mon", fullDay: "Monday" },
        { shortDay: "Tue", fullDay: "Tuesday" },
        { shortDay: "Wed", fullDay: "Wednesday" },
        { shortDay: "Thur", fullDay: "Thursday" },
        { shortDay: "Fri", fullDay: "Friday" },
        { shortDay: "Sat", fullDay: "Saturday" },
        { shortDay: "Sun", fullDay: "Sunday" }
    ];
    for (let i = 0; i < dates.length; i++) {
        LastDate = dates[i];
        firstDate = new Date(dates[i].getFullYear(), dates[i].getMonth(), 1)
        //creating the calender and its items dynamically by calling html tags
        content += "div id=`calenderTable`" + (i + 1) + "`>";
        //getting the date and year by splitting the previous string and calling item using the index, 0 is the day.
        content += "<h2>" + firstDate.toString().split(" ")[1] + "-" + firstDate.getFullYear() + "</h2>";
        content += "<table>";
        content += "<thead>";
        weekDays.map(item => {
            content += "<th>" + item.fullDay + "</th>";

        })
        content += "</thead>";
        content += "<tbody>";
        let j = 1;
        let displayNum, idMonth;
        //this is to render days of week
        while(j<=LastDate.getDate()){
            content += "<tr>";
            for(let k=0; k<7;k++){
displayNum=j<10?"0"+ j : j;
if (j== 1){
   if(firstDate.toString().split(" ")[0]== weekDays[k].shortDay){
       
   } 
}
            }
            content += "</tr>";
        }

        content += "</tbody>";
        content += "</table>";
        content += "</div>";
    }
    return content;
}
//FOR ADRIANA TO REMEBER this below is a string
let content = getDatesBetween("2020/01/01", "2021/01/01");
document.getElementById("Timeblocks").innerHTML = content;
