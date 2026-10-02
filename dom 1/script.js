let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function() {
    let taskText = input.value;
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }else {
    let li = document.createElement("li");

      let taskSpan = document.createElement("span");
       taskSpan.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

      
     
    deleteBtn.addEventListener("click", function() {
        li.remove();
        deleteBtn.remove();
    });

   li.addEventListener("click", function(event) {

    if (event.target === li) {
        li.classList.toggle("completed");
    }

});
    
   editBtn.addEventListener("click", function() {
    let newTaskText = prompt("Edit task:");
    if (newTaskText !== ""){
        taskSpan.textContent = newTaskText;
    }else {
        alert("Task cannot be empty.");
    }
    })

   
    taskList.append(li);
    li.append(taskSpan);
    li.append(deleteBtn);
    li.append(editBtn);
    }
    
})