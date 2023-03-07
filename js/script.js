let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv =document.querySelector(".tasks");

//tasks array
let tasksArray= [];

//add tasks
submit.onclick = function() {
    if(input.value !== "") {
        addTasks(input.value);
        input.value = "";
    }
}
//add tasks function
function addTasks(taskValue) {
    const tasks ={
        id: Date.now(),
        title: taskValue,
        completed: false,
    }
    //push task to array
    tasksArray.push(tasks);
    //add tasks to page
    addElements(tasksArray);
}

function addElements(tasksArray){
    tasksDiv.innerHTML = "";
    tasksArray.forEach(element => {
        let div =document.createElement("div");
        div.className = "task";
        if(element.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id",element.id);
        div.innerHTML = element.taskValue;
        let span = document.createElement("span");
        span.className = "del"
        span.innerHTML= '<i class="fa-solid fa-trash"></i>'
    });
}