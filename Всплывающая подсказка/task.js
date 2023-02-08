const tool = document.querySelectorAll(".has-tooltip"),
tooltip = document.querySelectorAll(".tooltip");


tool.forEach((el, index) => {
    el.addEventListener("click", (event) => {
        let activ = document.querySelector(".tooltip_active") // ищем активную подсказку
        if (activ) activ.classList.remove("tooltip_active") // усли true то убираем ее

        let coord = el.getBoundingClientRect() // получаем координаты элемента по клику
       
        const div = document.createElement("div") // создаем элемент на основе кликнутого
        div.classList.add("tooltip", "tooltip_active")
        div.textContent = el.title                // задаем текст подсказки  
        div.style.left = coord.left + "px";  // задаем координаты
        div.style.top = coord.bottom + "px";

        el.appendChild(div)  //добавляем элемент
        event.preventDefault() //запрещаем обновление страницы

    })

});