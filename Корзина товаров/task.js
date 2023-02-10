const addToCard = document.querySelectorAll(".product__add"),
    cards = document.querySelector(".cart__products"),
    products = document.querySelectorAll(".product"),
    quanty = document.querySelectorAll(".product__quantity-control")


addToCard.forEach((el, index) => {

    el.addEventListener("click", () => {

        funcAddToCard(el, index)
    })
})

quanty.forEach(el => {
    el.addEventListener("click", () => {
        let parent = el.closest(".product__quantity-controls")
        quant = parent.querySelector(".product__quantity-value")
        if (el.classList.contains("product__quantity-control_dec") && Number(quant.textContent) <= 1) return
        else if (el.classList.contains("product__quantity-control_dec")) {
            quant.textContent = Number(quant.textContent) - 1
        }
        else quant.textContent = Number(quant.textContent) + 1

    })
})

function funcAddToCard(el, index) {
    let cart = el.closest(".product"),
        productInCart = document.querySelectorAll(".cart__product")
    if (productInCart.length > 0) {//Добавление в карточку товара уже есть в корзине
        for (let i = 0; i < productInCart.length; i++) {
            if (productInCart[i].getAttribute("data-id") === cart.getAttribute("data-id")) {
                productInCart[i].querySelector(".cart__product-count").textContent = Number(productInCart[i].querySelector(".cart__product-count").textContent) + Number(products[index].querySelector(".product__quantity-value").textContent)
                return
            }
        }
    }
    
    squ = document.createElement("div")//Первичное создание карточки в корзине
    squ.classList.add("cart__product")
    squ.innerHTML = `<img class="cart__product-image" src=${products[index].querySelector(".product__image").src}>
                <div class="cart__product-count">${products[index].querySelector(".product__quantity-value").textContent}</div>`
    squ.setAttribute("data-id", `${products[index].getAttribute("data-id")}`)
    cards.append(squ)

    return
}
