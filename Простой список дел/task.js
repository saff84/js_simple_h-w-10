const form = document.querySelector("form"),
    text = document.getElementById("task__input"),
    taskList = document.querySelector(".tasks__list");

form.addEventListener("submit", (event) => {
    addTask()
    text.value = ""
    addListener()
    event.preventDefault()
})


function addTask() {
    let div = document.createElement('div');
    div.className = "task"
    div.innerHTML = `<div class="task__title">
    ${text.value}
  </div>
  <a href="#" class="task__remove">&times;</a>`
    taskList.append(div)
}

function addListener() {
   const removeEl = document.querySelectorAll(".task__remove"),
   tasks = document.querySelectorAll(".task");
    
    removeEl.forEach((el,index) => {
        el.addEventListener("click", (event) => {
        tasks[index].remove()
        event.preventDefault()
    })
    })
    
}