let task = document.getElementById("task");
let total = document.getElementById("total");
let pendingTask = document.getElementById("pendingTask");
let completedTask = document.getElementById("completedTask");
let compi = document.getElementById("compi");
let incompi = document.getElementById("incompi");
let hide = document.getElementById("hide");
let todo = [];

function taskinput() {
  let taskstore = task.value;
  if (taskstore !== "") {
    let data = {
      text: taskstore,
      isCompleted: false,
    };
    todo.push(data);
  }
  task.value = "";
  displaytask();
}

function displaytask() {
  pendingTask.innerHTML = "";
  completedTask.innerHTML = "";
  console.log(todo);
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].isCompleted) {
      completedTask.innerHTML += `
    <div class='task'>
    <i class='fa-solid fa-square-check' onclick="markComplete(${i})"></i> 
      <span>${todo[i].text}</span>
      <i class='fa-regular fa-circle-xmark' onclick='removeTask(${i})'></i>
    </div>`;
    } else {
      pendingTask.innerHTML += `
    <div class='task'>
    <i class='fa-regular fa-square' onclick="markComplete(${i})"></i> 
      <span>${todo[i].text}</span>
      <i class='fa-regular fa-circle-xmark' onclick='removeTask(${i})'></i>
    </div>`;
    }
  }
  if (todo.length !== 0) {
    hide.classList.remove("hide");
  } else {
    hide.classList.add("hide");
  }
  total.innerHTML = todo.length;
  countCompleted();
}

function removeTask(index) {
  todo.splice(index, 1);
  displaytask();
}

function markComplete(index) {
  todo[index].isCompleted = !todo[index].isCompleted;
  displaytask();
}

function countCompleted() {
  let count = 0;
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].isCompleted === true) {
      count = count + 1;
    }
  }
  compi.innerHTML = count;
  incompi.innerHTML = todo.length - count;
}
