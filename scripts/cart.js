var value =  JSON.parse(localStorage.getItem("cart"));

var contain = document.getElementById("total-div");
function adddtocart(value){
    document.getElementById("total-div").innerHTML = "";
    
 var cart_div = document.createElement("div");


var foo_im =  document.createElement("img");
foo_im.src = value.strMealThumb;
cart_div.append(foo_im);
contain.append(cart_div);
 //window.location.href = "cart.html";

}