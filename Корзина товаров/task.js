const addToCard = document.querySelectorAll(".product__add"),
card = document.querySelector(".cart__products"),
products = document.querySelectorAll(".product"),
quanty = document.querySelectorAll(".product__quantity-control")




addToCard.forEach((el, index) => {
    el.addEventListener("click", () => {
        squ = document.createElement("div")
        squ.classList.add("cart__product")
        squ.innerHTML = `<img class="cart__product-image" src=${products[index].querySelector(".product__image").src}>
        <div class="cart__product-count">${products[index].querySelector(".product__quantity-value").textContent}</div>`
        squ.setAttribute("data-id", `${products[index].getAttribute("data-id")}`)
        card.append(squ)
    } )
})


