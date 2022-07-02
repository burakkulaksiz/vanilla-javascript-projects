"use strict";

const inputTask = document.getElementById("txtInput");
const deleteAll = document.getElementById("btnDeleteAll");

let editId;
let isEditTask = false;

let taskList = [
  { id: 1, taskName: "Element 1", statu: "Completed" },
  { id: 2, taskName: "Element 2", statu: "Completed" },
  { id: 3, taskName: "Element 3", statu: "Completed" },
  { id: 4, taskName: "Element 4", statu: "Pending" },
];

// sayfa ilk açıldığında görev listesindeki elemanların gösterilmesini sağlar
displayTasks();

function displayTasks() {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";
  if (taskList.length == 0) {
    ul.innerHTML = "<li class='list-element'>List is empty</li>";
  } else {
    for (let task of taskList) {
      let li = `
        <li class="list-element">
            <span class="check-span">
              <input type="checkbox" id="${task.id}"  />
              <label for="${task.id}">${task.taskName}</label>
            </span>
            <span>
              <a onclick="deleteTask(${task.id})">
              <i class="fa-solid fa-trash-can" ></i>
              </a>
              <a onclick="editTask(${task.id},'${task.taskName}')"><i class="fa-solid fa-pen-to-square" >
              </i>
              </a>
            </span>
        </li>`;
      ul.insertAdjacentHTML("beforeend", li);
    }
  }
}

// Add butonuna tıklayın todo'yu ekler
document.querySelector("#btnAdd").addEventListener("click", newTask);

// Enter'a basınca todo'yu eklemesi lazım ama bu kod satırı bir şekilde çalışmadı
// document
//   .querySelector("#btnAdd")
//   .addEventListener("keypress", function (event) {
//     if (event.key == "Enter") {
//       document.getElementById("btnAdd").click();
//     }
//   });

// Add butonuna tıklayınca çalışacak olan fonksiyon
function newTask(event) {
  if (inputTask.value == "") {
    alert("Please Enter CheckList Value!");
  } else if (isEditTask == true) {
    // update
    for (let task of taskList) {
      if (task.id == editId) {
        task.taskName = inputTask.value;
      }
      isEditTask = false;
    }
  } else {
    // add
    taskList.push({
      id: taskList.length + 1,
      taskName: inputTask.value,
    });
  }
  inputTask.value = "";
  displayTasks();
  event.preventDefault();
}

// Bir elemanı silme
function deleteTask(id) {
  let deletedId;
  for (let index in taskList) {
    if (taskList[index].id == id) {
      deletedId = index;
    }
  }
  taskList.splice(deletedId, 1);
  displayTasks();
}

// Bir elemanı düzenleme
function editTask(taskId, taskName) {
  editId = taskId;
  isEditTask = true;
  inputTask.value = taskName;
  inputTask.focus();
}

// Tüm elemanları silme
deleteAll.addEventListener("click", function () {
  taskList.splice(0, taskList.length);
  displayTasks();
});
