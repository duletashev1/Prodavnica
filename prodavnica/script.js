let allTotal=0;
function addToCart(element){
let mainEl=element.closest('.single-item');
  let price=mainEl.querySelector('.price').innerText;
  let name=mainEl.querySelector('h3').innerText;
  let quantity=mainEl.querySelector('input').value;
  let cardItems=document.querySelector('.cart-items');
  price=price.substring(1);
  let total=parseInt(price) *parseInt(quantity);

  if(parseInt(quantity)>0){
    allTotal+=total;
    cardItems.innerHTML+=`<div class="cart-single-item">

<h3>${name}</h3>
<p>${price} X ${quantity} = $<span>${total}</span></p>
<button onclick="removeFromCart(this)" class="remove-item">Izbirshi</button>
</div>`

    document.querySelector('.total').innerHTML= `Total  $${allTotal}`

   element.innerText='Dodadeno';
   element.setAttribute('disabled','true');
  }
  else{
    alert('Odberi kolicina');
  }
console.log(total);
}
function removeFromCart(element){
  let mainEl=element.closest('.cart-single-item');
  mainEl.remove();
  let price=mainEl.querySelector('p span').innerText;
  let name=mainEl.querySelector('h3').innerText;
  let vegetables= document.querySelectorAll('.single-item');
 price=parseInt(price);
 allTotal-=price;
 document.querySelector('.total').innerText=`Total: $${allTotal}`
 mainEl.remove();
 vegetables.forEach(function (vege){
   let itemName=vege.querySelector('.si-content h3').innerText
   if(itemName===name){
     vege.querySelector('.actions input').value=0;
     vege.querySelector('.actions button').removeAttribute('disabled');
     vege.querySelector('.actions button').innerText='Dodaj';

   }
 })
}


var buttons = document.getElementsByClassName("myButton");

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    // Промени ги димензиите на секое дугме
    button.style.width = "100px";
    button.style.height = "30px";
}



