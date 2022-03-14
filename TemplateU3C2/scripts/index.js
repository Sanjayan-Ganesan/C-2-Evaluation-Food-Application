var menu = document.getElementById("menu");

async function indianfood(){
    try{
        var foodlist = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
        var data = await foodlist.json();
        console.log(data);
        if(data == undefined){
            return false;
        }
        appenddata(data)
    }
    catch(error){

        if(data = false){
            console.log(error);
            append_no_food(error);
        }
    }
}
indianfood();


function appenddata(data){

    console.log(data);
    document.getElementById("menu").innerHTML = "";

    data.meals.forEach(function(element){

        var carddiv = document.createElement("div");
        carddiv.style.width = "350px";
        carddiv.style.height = "550px";

        var images = document.createElement("img");
        images.src = element.strMealThumb;


        var item =  document.createElement("h2");
        item.innerHTML = element.strMeal;


        var price = document.createElement("p");
        price.textContent = Math.round(Math.random() * ( 500 - 100) + 100);


        var cart_btn = document.createElement("button");
        cart_btn.textContent = `Add to Cart`;
        cart_btn.addEventListener("click",function(){
            addcart(element);

        })




        carddiv.append(images,item,price,cart_btn);
        menu.append(carddiv);

    });


   

}

function addcart(data){
var bag = JSON.parse(localStorage.getItem("cart")) || [];
console.log(data);
bag.push(data);
localStorage.setItem("cart",JSON.stringify(bag));
}



var count = document.getElementById("count");


function cartvalue(res){
    document.getElementById("count").innerHTML = "";
    var res = JSON.parse(localStorage.getItem("cart")) || [];
 var count_div = document.createElement("div");


 var counter = document.createElement("h4");
 counter.textContent = `Cart Counter:${res.length}`;
 counter.style.color = `white`;
console.log(res.length);
 count_div.append(counter);
 count.append(count_div);
 //window.location.href = "cart.html";
}
cartvalue();