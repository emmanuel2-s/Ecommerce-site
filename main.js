var removeItemButtons = document.getElementsByClassName('cart-btn')
console.log(removeItemButtons);

for (var i = 0; i < removeItemButtons.length; i++) {
    var cartBtn = removeItemButtons[i];
     cartBtn.addEventListener('click', function (event) {
    var buttonclick = event.target
    buttonclick.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
  })
};


function updateCartTotal() {
    //  var container = document.getElementsByClassName('cart-items')[0]
  var cartItemsContainer = document.getElementsByClassName('container')[0]
  var cartRows = cartItemsContainer.getElementsByClassName('cart-container');
  var totalPrice = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    console.log(cartRow)
    var priceElement = cartRow.getElementsByClassName('price-quantity')[0]
    // var quantityElement = cartRow.getElementsByClassName('add-input')[0]
    var subTotal = cartRow.getElementsByClassName('sub-price')[0]
    var price = parseFloat(priceElement.innerText.replace('$',''))
    // var quantity = quantityElement.value
    total = totalPrice + (price * quantity)
    console.log(priceElement, subTotal, quantityElement)
  }
  document.getElementsByClassName('total')[0].innerText = total
}





function openNav() {

  document.getElementById("myTopnav").style.display = 'block';
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
};

function closeNav() {
  document.getElementById('myTopnav').style.display = 'none';
  document.body.style.backgroundColor = "white";
};



function sendMail(e) {
  e.preventDefault()
  var params = {
    name: document.getElementById('name').Value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  const serviceID = "service_f3mbn3p";
  const templateID = "template_flau55d";

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
      console.log(res);
      alert("Email sent Successfully");
    })
    .catch((err) => console.log(err));
}

