var total = 0;
 
function Calculate(item){
       if(item.checked){
        total+= parseInt(item.value);
           
       }else{
          total-= parseInt(item.value);
       }
       document.getElementById('somme').innerHTML = total;
   };
function recupValeurs() {

var somme =document.getElementById('somme').innerHTML ;
  alert("la somme des choix selectionnees est : "+ somme);

 }
      ;

// filer
let cards = document.querySelectorAll(".box");
let plat = document.querySelector("#btn-plat");
let salade = document.querySelector("#btn-salade");
let obento = document.querySelector("#btn-obento");
let all = document.querySelector("#btn-all");
let sushi = document.querySelector("#btn-sushi");

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