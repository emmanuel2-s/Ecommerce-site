const cartNumb = document.querySelector(".cart-shop span")
let itemsCount = JSON.parse(localStorage.getItem("items"));

cartNumb.innerHTML = `(${itemsCount.length})`
console.log("items", itemsCount.length)
