// filer
let cards = document.querySelectorAll(".box");
let plat = document.querySelector("#btn-plat");
let salade = document.querySelector("#btn-salade");
let obento = document.querySelector("#btn-obento");
let all = document.querySelector("#btn-all");
let sushi = document.querySelector("#btn-sushi");

all.addEventListener('click',()=>{
  cards.forEach((element)=>{
    element.style.display = "block";
    if(!element.classList.contains("box")){
      element.style.display = "none";
    }
  })
})
sushi.addEventListener('click',()=>{
  cards.forEach((element)=>{
    element.style.display = "block";
    if(!element.classList.contains("sushi")){
      element.style.display = "none";
    }
  })
})
plat.addEventListener('click',()=>{
  cards.forEach((element)=>{
    element.style.display = "block";
    if(!element.classList.contains("plats")){
      element.style.display = "none";
    }
  })
})
salade.addEventListener('click',()=>{
  cards.forEach((element)=>{
    element.style.display = "block";
    if(!element.classList.contains("salade")){
      element.style.display = "none";
    }
  })
})
obento.addEventListener('click',()=>{
  cards.forEach((element)=>{
    element.style.display = "block";
    if(!element.classList.contains("obento")){
      element.style.display = "none";
    }
  })
})

// nav barr respo
let list = document.querySelector('#list');
let humb = document.querySelector('#humb');

humb.addEventListener('click',()=>{
  list.classList.toggle("show");
})

//panier

function myFunction() {
  var element = document.getElementById("black-square");
  element.classList.remove("open");
  var element = document.getElementById("black-square");
  element.classList.toggle("close");

};


//  let carte = document.querySelector('#carte');
//  let panier = document.querySelector('.panier');
//  carte.addEventListener('click',()=>{
//     if(panier.style.display !== "none" ){
//       panier.style.display =  "none";
//     }else{
//       panier.style.display =  "block";
//     }
//  })

let cartBox = document.getElementsByClassName("cart-bx")[0];
let cartIcon = document.getElementById("carte");
cartIcon.addEventListener('click', function() {
  cartBox.classList.toggle('hide');
});
// ________
let removeButton = document.querySelectorAll(".remove-btn");
for(let i = 0; i < removeButton.length; i++) {
  removeButton[i].addEventListener('click', removeProduct);
}
function removeProduct(event) {
  let rButton = event.target;
  let price = rButton.parentElement.getElementsByClassName("price")[0];
  rButton.parentElement.remove();
  updateTotal();
}
// _______
let addButton = document.getElementsByClassName("add-btn");
for(let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener('click', buttonClicked)
}
function buttonClicked(event) {
  let button = event.target;
  let parent = button.parentElement;
  let title = parent.getElementsByClassName("p-name")[0].innerText;
  let price = parent.getElementsByClassName("price")[0].innerText;
  addProduct(title, price);
}
function addProduct(title, price) {
  let products = document.getElementsByClassName("products")[0];
  let product = document.createElement("div");
  let htmlProduct = `
  <div class="product">
    <p>${title}</p>
    <p><span class="product-price">${price}</span>€</p>
    <button class="remove-btn">Remove</button>
 </div> `
 product.innerHTML = htmlProduct;
 products.append(product)
 product.getElementsByClassName("remove-btn")[0].addEventListener('click', removeProduct);
 updateTotal();
 
}
function updateTotal() {
	let items = document.getElementsByClassName("products")[0];
	let rows = items.getElementsByClassName("product");
	let total = 0;
	  for(let i = 0; i < rows.length; i++) {
		  let elementPrice = rows[i].getElementsByClassName("product-price")[0];
      console.log(elementPrice);
      total += parseFloat(elementPrice.innerText);
	  }
  
	total = Math.round(total * 100) / 100;
	document.getElementById("total").innerText = total;
}
let buy = document.getElementsByClassName("buy")[0];
buy.addEventListener('click', function(){
  alert("thank you for your purchase!");
})
