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