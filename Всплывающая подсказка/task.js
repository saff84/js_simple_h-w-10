document.addEventListener("click", e => {  //слушаем клики по документу

    if (e.target.classList.contains('has-tooltip') || e.target.closest('.has-tooltip')) { //проверям клик нужный элемент или рядом с ним
        tooltipShow(e.target)                   //показываем посказку
        e.preventDefault()
    }
    else {
        tooltipHide()                           //иначе прячем если она есть
    }
})

function tooltipShow(link) {
    if (!document.querySelector('.tooltip')) { //если еще нет div с подсказкой то создаем
        tooltipCreate(link);
    }
    let tooltip = document.querySelector('.tooltip'),  // получаем созданный div подсказки
        coord = link.getBoundingClientRect();               // получаем координаты блока для подсказки
    tooltip.innerHTML = link.getAttribute('title');         //обновляем данные для подсказки
    tooltip.classList.toggle('tooltip_active');
    tooltip.style.left = coord.left + "px";
    tooltip.style.top = coord.bottom + "px";

}

function tooltipHide() {
    let tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.classList.remove('tooltip_active');
    }
}

function tooltipCreate() {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.append(tooltip);
}