// let input = document.querySelector(".input");
// let submit = document.querySelector(".add");
// let tasksDiv =document.querySelector(".tasks");

// //tasks array
// let tasksArray= [];
// // Check if Theres Tasks In Local Storage
// if (localStorage.getItem("tasks")) {
//     arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
// }
// //triger get data from local storage
// getDataFromLocalStorage();
// //add tasks
// submit.addEventListener("click",() => {
//     if (input.value !== "") {
//         addTasks(input.value);
//         input.value = "";
//     }
// }) 
// //delete tasks from delete button
// tasksDiv.addEventListener("click", (e) => {
//     // Delete Button
//     if (e.target.classList.contains("del")) {
//         // Remove Element From Page
//         e.target.parentElement.remove();
//         //remove from local storage
//         deleteTask(e.target.parentElement.getAttribute("data-id"));
//     }
//         // done Task Element
//     if (e.target.classList.contains("task")) {
//         // Toggle Done Class
//         e.target.classList.toggle("done");
//         toggleStatusTaskWith(e.target.getAttribute("data-id"));
//     }
// });
// //add tasks function
// function addTasks(taskValue) {
//     const tasks ={
//         id: Date.now(),
//         title: taskValue,
//         completed: false,
//     }
//     //push task to array
//     tasksArray.push(tasks);
//     //add tasks to page
//     addElements(tasksArray);
//     localStorageData(tasksArray);
// }
// //add tsaks to page
// function addElements(tasksArray){
//     tasksDiv.innerHTML = '';
//     tasksArray.forEach((element) => {
//         //create the main div
//         let div =document.createElement("div");
//         div.className = "task";
//         //check if task done
//         if(element.completed) {
//             div.className = "task done";
//         }
//         div.setAttribute("data-id",element.id);
//         div.innerHTML = element.title;
//         //create delete button
//         let span = document.createElement("span");
//         span.className = "del"
//         span.innerHTML= 'Delete';
//         div.appendChild(span);
//         tasksDiv.appendChild(div);
//     });
// }
// //local storage function
// function localStorageData(tasksArray) {
//     window.localStorage.setItem("tasks",JSON.stringify(tasksArray))
// }
// function getDataFromLocalStorage(){
//     let Data = window.localStorage.getItem('tasks');
//     if(Data){
//         let tasks = JSON.parse(Data);
//         addElements(tasks)
//     }
// }
// // delete function 
// function deleteTask(taskId) {
//     tasksArray.filter((tasks) => tasks.id != taskId);
//     localStorageData(tasksArray)
// }
// function toggleStatusTaskWith(taskId) {
//     for (let i = 0; i < arrayOfTasks.length; i++) {
//         if (tasksArray[i].id == taskId) {
//             tasksArray[i].completed == false ? (tasksArray[i].completed = true) : (tasksArray[i].completed = false);
//             }
//         }
//         localStorageData(tasksArray);
// }
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

// Add Task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); // Add Task To Array Of Tasks
    input.value = ""; // Empty Input Field
  }
};

// Click On Task Element
tasksDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove Task From Local Storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    e.target.parentElement.remove();
  }
  // Task Element
  if (e.target.classList.contains("task")) {
    // Toggle Completed For The Task
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    // Toggle Done Class
    e.target.classList.toggle("done");
  }
});

function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // Push Task To Array Of Tasks
  arrayOfTasks.push(task);
  // Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks);
  // Add Tasks To Local Storage
  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  // Empty Tasks Div
  tasksDiv.innerHTML = "";
  // Looping On Array Of Tasks
  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    // Check If Task is Done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    // Append Button To Main Div
    div.appendChild(span);
    // Add Task Div To Tasks Container
    tasksDiv.appendChild(div);
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  // For Explain Only
  // for (let i = 0; i < arrayOfTasks.length; i++) {
  //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
  // }
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}