var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('MMMM Do YYYY, h:mm:ss a');


var todoInput = document.querySelector("#9AM");
var todoForm = document.querySelector("#10AM");
var todoList = document.querySelector("#11AM");
var todoInput = document.querySelector("#12PM");
var todoForm = document.querySelector("#1PM");
var todoList = document.querySelector("#2PM");
var todoList = document.querySelector("#3PM");
var todoList = document.querySelector("#4PM");
var todoList = document.querySelector("#5PM");

function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var timeNotes = JSON.parse(localStorage.getItem("9AM"));
    var timeNotes = JSON.parse(localStorage.getItem("10AM"));
    var timeNotes = JSON.parse(localStorage.getItem("11AM"));
    var timeNotes = JSON.parse(localStorage.getItem("12PM"));
    var timeNotes = JSON.parse(localStorage.getItem("1PM"));
    var timeNotes = JSON.parse(localStorage.getItem("2PM"));
    var timeNotes = JSON.parse(localStorage.getItem("3PM"));
    var timeNotes = JSON.parse(localStorage.getItem("4PM"));
    var timeNotes = JSON.parse(localStorage.getItem("5PM"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (timeNotes !== null) {
      todos = timeNotes;
    }
  
    // Render todos to the DOM
    render9AM();
    render10AM();
    render11AM();
    render12PM();
    render1PM();
    render2PM();
    render3PM();
    render4PM();
    render5PM();
  }
  
  function storeTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  // When form is submitted...
  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var todoText = todoInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  });