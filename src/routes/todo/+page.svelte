<script>
  import { onMount } from "svelte/internal";

  onMount(()=>{

document.getElementById("addTaskButton").addEventListener("click", function() {
  var taskText = document.querySelector("input[type='text']").value;
  if (taskText.trim() !== "") {
    addTask(taskText);
    document.querySelector("input[type='text']").value = "";
  }
});})


function addTask(taskText) {
  var taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskItem.addEventListener("click", function() {
    taskItem.classList.toggle("completed");
  });

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", function() {
    taskItem.remove();
  });

  taskItem.appendChild(deleteButton);
  document.getElementById("todoList").appendChild(taskItem);
}


function removeTask() {
  var tasks = document.querySelectorAll("#todoList li");
  if (tasks.length > 0) {
    tasks[tasks.length - 1].remove();
  }
}


let newtask = "";
let tasks =[]
function addnewTask(){
  tasks.push(newtask)
  tasks = tasks

}
</script>


  
  
  <div class="container">
    <h1>Todo List </h1>
    <input type="text" bind:value={newtask} placeholder="Add a new task">
    <button on:click={addnewTask} id="addTaskButton">Add Task</button>
    <ol id="todoList">
      {#each tasks as task}
        <li>{task}  </li>
      {/each}


    </ol>
  </div>
  
  <div class="btn btn-two" onclick="removeTask()">
    <span>REMOVE</span>
  </div>
  

  
  
  <style>
  
  .container {
    width: 80%;
    height: 70%;
    background-color: lightgray;
    border: 10px solid black;
    border-radius: 10px;
    padding-top: 10px;
    display: grid;
  }
  

  
  input[type="text"] {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    
    transition: border-color 0.5s, background-color 0.5s;
  }
  

  input[type="text"]:focus {
    background-color: lightblue; 
    border-color: darkblue; 
  }
  
  
  button {
    padding: 10px 20px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #4caf50;
    color: white;
  }
  
  
  button:hover {
    background-color: #45a049;
  }
  

  
  
  .btn {
    line-height: 20px;
    height: 20px;
    text-align: center;
    width: 100px;
    cursor: pointer;
  }
  
  
  .btn-two {
    color: #FFF;
    transition: all 0.5s;
    position: relative;
  }
  
  
  .btn-two span {
    z-index: 2;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  
  .btn-two::before,
  .btn-two::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid rgba(255,255,255,0.2);
    background-color: rgba(255,255,255,0.1);
  }
  
  
  .btn-two::after {
    transform: rotate(45deg);
  }
  
  
  .btn-two:hover::before {
    transform: rotate(-45deg);
    background-color: transparent;
  }
  
  
  .btn-two:hover::after {
    transform: rotate(45deg);
    background-color: transparent;
  }
  </style>
  