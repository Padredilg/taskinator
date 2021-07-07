var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
//I guess we create a var to hold the querySel value of an el
//then we write a line for that varEl.addEvLis("action", "reaction");

var taskFormHandler = function(event){//this is a function that when activated performs the following
    event.preventDefault();//forces the page not to reload at the end of function
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //packaging the inputed and selcted data into an object to call the next function with
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj){
    //creates a var that represents a new li that will go inside the ul and gives the li a class
    var listItemEl = document.createElement("li")
    listItemEl.className = "task-item";
    //creates a var representing a new div that we will put inside the listItemEl-li, and gives div a class
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    //adds HTML content with taskNameInput and taskTypeInput directly into the div

    listItemEl.appendChild(taskInfoEl);//puts div inside li
    // appends this loose newly created li(with the div and HTML content inside) in the ul
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);