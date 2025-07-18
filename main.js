window.onscroll = function () { navScroll() }
function navScroll() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector(".navBar").classList.add("navScrollStyle")
  } else {
    document.querySelector(".navBar").classList.remove("navScrollStyle")

  }
}


document.addEventListener("DOMContentLoaded", addToCartItems);

var removeItemButtons = document.getElementsByClassName("cart-btn");
console.log(removeItemButtons);
// REMOVE CART ITEMS ...

function removeItems(e) {
  var buttonClick = e.target;
  //  console.log(buttonClick)
  buttonClick.parentElement.parentElement.parentElement.remove();
  Total();
}
// function deleteData(index) {
//   let items;
//   if (localStorage.getItem('items') === null) {
//     items = []
//   } else {

//     items = JSON.parse(localStorage.getItem('items'))
//   }
//    items.splice(index, 1)
//   localStorage.setItem('items', JSON.stringify(items))
//   // var buttonclick = e.target
//  // buttonclick.parentElement.parentElement.parentElement;
//   addToCartItems()
//   Total()
// }

var add_to_cart_btn = document.getElementsByClassName("add-button");

for (var i = 0; i < add_to_cart_btn.length; i++) {
  add_to_cart_btn[i].addEventListener("click", addToCartBtn);
}

// UPDATE CART INPUT .....//
var inputQuantity = document.getElementsByClassName("add-input");
console.log(inputQuantity);

function updateCartInput(e) {
  var quantityElement = e.target;
  var inputChange = quantityElement.parentElement.parentElement;
  var priceElement = inputChange
    .getElementsByClassName("price-quantity")[0]
    .innerText.replace("$", "");
  var subTotal = inputChange.getElementsByClassName("sub-price")[0];
  subTotal.innerText =
    "$" + Math.round(quantityElement.value * priceElement * 100) / 100;

  if (isNaN(quantityElement.value) || quantityElement.value <= 0) {
    quantityElement.value = 1;
  }
  Total();
}

// ADD TO CART BUTTON
function addToCartBtn(e) {
  var addBtn = e.target;
  var buttonParent = addBtn.parentElement;
  var itemName = buttonParent.children[1].innerText;
  var itemPrice = buttonParent.children[2].innerText;
  var itemImg = buttonParent.children[0].src;

  var cart_btn = document.getElementsByClassName("add-button");
  var cartCount = document.querySelector(".cart-shop");

  for (let butt of cart_btn) {
    butt = (e) => {
      let item = Number(cartCount.getAttribute("data-count") || 0);
      cartCount.setAttribute("data-count", item + 1);
      cartCount.classList.add("on");
    };
  }

  let data = showItem(itemName, itemImg, itemPrice);
  addItemsToLocalStorage(data);
}

function showItem(itemName, itemImg, itemPrice) {
  let item = {};
  (item["Name"] = itemName),
    (item["img"] = itemImg),
    (item["price"] = itemPrice);

  console.log(item);
  return item;
}

//SAVE TO LOCAL STORAGE
function addItemsToLocalStorage(data) {
  let items = JSON.parse(localStorage.getItem("items"));
  if (localStorage.getItem("items") === null) {
    items = [];
  }
  const exist = items.find((item) => item.Name === data.Name);
  if (exist) {
    alert("item already added to the cart.!!");
    return false;
  } else {
    // items = JSON.parse(localStorage.getItem('items'))
    items.push(data);
    localStorage.setItem("items", JSON.stringify(items));
  }
}

function deleteItem(index) {
  document.getElementsByClassName("cart-btn")[0];
}

// FETCH DATA FROM LOCAL STORAGE ....

function addToCartItems() {
  var text = "No item in the cart <br/> Cart is empty!!";
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }

  if (
    JSON.parse(localStorage.getItem("items")) === null ||
    displayData === ""
  ) {
    document.getElementById("info").innerHTML = text;
    document.getElementById("purchaseBtn").style.display = "none";
  } else {
    var tableData = "";
    items.forEach((data) => {
      tableData += "<tr>";
      tableData += `<td class="cart-container">
    <img src="${data.img}" alt="">
    <div class="cart-info">
        <p class="cart-name">${data.Name}</p>
        <small class="price-quantity">${data.price}</small>
        <br />
        <button class="cart-btn" type="button">Remove</button>
    </div>
    </td>
       <td><input type="number" class="add-input" value="1"></td>
       <td class="sub-price">${data.price}</td>`;
      tableData += "<tr/>";
    });
    var displayData = (document.querySelector(".cart-items").innerHTML =
      tableData);
    document.getElementById("purchaseBtn").style.display = "block";

    for (var i = 0; i < inputQuantity.length; i++) {
      var input = inputQuantity[i];
      input.addEventListener("change", updateCartInput);
    }

    for (var i = 0; i < removeItemButtons.length; i++) {
      var cartBtn = removeItemButtons[i];
      cartBtn.addEventListener("click", removeItems);
    }

    Total();
    var purchase = document.getElementsByClassName("cart-purchaseBtn")[0];
    purchase.addEventListener("click", purchaseBtn);
  }
}
document.onload = addToCartItems();

// UPDATE TOTAL

function Total() {
  let total = 0;
  let final_total = document.getElementsByClassName("total")[0];
  let total_price = document.getElementsByClassName("sub-price");
  for (i = 0; i < total_price.length; i++) {
    itemsTotal = total_price[i];
    tp = Number(itemsTotal.innerText.replace("$", ""));
    total += tp;
  }
  total = Math.round(total * 100) / 100;
  final_total.innerText = "$" + total;
}

// UPDATE PURCHASE AND CLEAR
function purchaseBtn() {
  alert("Thanks for your purchase and patronage ");
  const removeAll = JSON.parse(localStorage.getItem("items"));
  localStorage.clear(removeAll);
  window.location.reload();
}

function openNav() {
  document.getElementById("myTopnav").style.display = "block";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeNav() {
  document.getElementById("myTopnav").style.display = "none";
  document.body.style.backgroundColor = "white";
}

function sendMail(e) {
  e.preventDefault();
  var params = {
    name: document.getElementById("name").Value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_f3mbn3p";
  const templateID = "template_flau55d";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value;
      document.getElementById("email").value;
      document.getElementById("message").value;
      console.log(res);
      alert("Email sent Successfully");
    })
    .catch((err) => console.log(err));
}


// function Vote() {
//   let Age_vote = '';
//   let Age = Number(document.getElementById('age').value)
//   if (isNaN(Age) || Age === '') {
//     Age_vote = 'Enter a valid input'
//   } else {
//     Age_vote = (Age < 18) ? 'Too Young' : 'Old Enough';
//   }
//   console.log(Age_vote)
// }

// let hour = new Date().getHours();
// let greeting;
// if (hour < 18) {
//   greeting = 'good day'
// } else {
//   greeting = 'good evening'
// }
// console.log(greeting)
// // const fruits = ['Banana','Kiwi','orange','Pineapple']
// // // const first = fruits.map(myFunction)
// // console.log(fruits)
// // fruits.push('Lemon')
// // let fruit= fruits[fruits.length-1]
// // console.log(fruit)
// // fruit=fruits.unshift()
// // console.log(fruit)

// // let demoText = '<ul>'
// // for(i = 0; i < fruits.length; i++){
// //   demoText += '<li>' + fruits[i] + '<li/>'
// // }
// // demoText += '<ul/>'
// // // document.getElementById('demo').innerHTML = arr2
// const arr1 = [45,5,9,35,20,80,112]
// const arr2 = arr1.sort(myFunction)

// function myFunction(a,b){
// return a - b
// }
// document.getElementById('demo').innerHTML = arr2

// // const dt = new Date()
// // console.log(dt.toDateString())

// // const t = new Date("2015-03-25T12:00:00-06:00");
// // console.log(t.toISOString())
// // const math = Math.sin(90*Math.PI/ 180)
// // console.log(math)

// const Identity = { fname: 'Emmanuel', lname: 'Enunwa', age: '23' }
// let person = '';
// for (let p in Identity) {
//   person += Identity[p] + ' '
// }
// console.log(person)

// function myVote(){
//   const message = document.getElementById('po1');
//   message.innerHTML = '';
//   const check = document.getElementById('email').value;
// try {
//   if(check == '') throw 'empty';
//   // if(!includes['@']) throw 'email should includes @ ';
//   if(pattern = 'a-z A-Z 0-9') throw 'should include a uppercase, lowercase,and a number';
// } catch (error) {
//   message.innerHTML= 'input ' + error
// }
// }
