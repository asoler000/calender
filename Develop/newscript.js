$(document).ready(function(){

  var eDisplayMoment = document.getElementById('currentDay');
  eDisplayMoment.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
  
  

  var currentHour = moment().hours()
  
  $('.timeblock').each(function () {
    var blockHour = $(this).attr('id')
  
    if (blockHour < currentHour) {
      $(this).addClass('.past')
  
    } else if (blockHour === currentHour) {
      $(this).removeClass('.past')
      $(this).addClass('.present')
  
    } else {
  
    }$(this).addClass('.future')
  
  })
  
  
  function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var timeNotesNine = JSON.parse(localStorage.getItem("9AM"));
    var timeNotesTen = JSON.parse(localStorage.getItem("10AM"));
    var timeNotesEleven = JSON.parse(localStorage.getItem("11AM"));
    var timeNotesTwelve = JSON.parse(localStorage.getItem("12PM"));
    var timeNotesOne = JSON.parse(localStorage.getItem("1PM"));
    var timeNotesTwo = JSON.parse(localStorage.getItem("2PM"));
    var timeNotesThree = JSON.parse(localStorage.getItem("3PM"));
    var timeNotesFour = JSON.parse(localStorage.getItem("4PM"));
    var timeNotesFive = JSON.parse(localStorage.getItem("5PM"));

    var timeNotes = [timeNotesNine, timeNotesTen, timeNotesEleven, timeNotesTwelve, timeNotesOne, timeNotesTwo, timeNotesThree, timeNotesFour, timeNotesFive]
    // If todos were retrieved from localStorage, update the todos array to it
    for (myelement of timeNotes) {
      if (myelement !== null) {
        todos.push(myelement)
      }
    }
  
    $('#9AM .todo-Description').val(localStorage.getItem("9AM"));
    $('#10AM .todo-Description').val(localStorage.getItem("10AM"));
    $('#11AM .todo-Description').val(localStorage.getItem("11AM"));
    $('#12AM .todo-Description').val(localStorage.getItem("12AM"));
    $('#1PM .todo-Description').val(localStorage.getItem("1PM"));
    $('#2PM .todo-Description').val(localStorage.getItem("2PM"));
    $('#3PM .todo-Description').val(localStorage.getItem("3PM"));
    $('#4PM .todo-Description').val(localStorage.getItem("4PM"));
    $('#5PM .todo-Description').val(localStorage.getItem("5PM"));
  
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
  todoForm.addEventListener("submit", function (event) {
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
  function renderTodos() {
    for (element of todos) {
      console.log(element)
    }
  
  }
})
