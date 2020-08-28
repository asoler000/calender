
// include today's date today

//why is the computer saying breakpoint at the beginning of this script on line 5? ugh
const m = moment();

console.log(m.format ("ddd MMMM Mo YYYY"));
console.log(m.format("[Yeah the day is] dddd [and we're in] YYYY"));

var dt = new Date();
document.getElementById("currentDay").innerHTML = dt.toLocaleString();


