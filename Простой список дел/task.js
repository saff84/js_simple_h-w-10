const form = document.querySelector("form"),
    text = document.getElementById("task__input"),
    taskList = document.querySelector(".tasks__list");

form.addEventListener("submit", (event) => {
    if (text.value.trim()) {
        addTask()
    }

    text.value = ""
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

document.addEventListener("click", e => {

    if (e.target.classList.contains("task__remove")) {
        e.target.parentNode.remove()
        e.preventDefault()
    }
})

