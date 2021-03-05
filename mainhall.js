
    var intro1 = "Izakaya refers to the traditional Japanese tavern, which can also be interpreted as a Japanese bar serving wine and food. Originating in the Edo period, wine shop's operators offered simple dishes in order to keep customers in their shop and buy wine. As time goes on, Izakaya has gradually become an indispensable part of Japanese culture. This allowed the culture of Izakaya to spread to other places. Next>> ";
    var intro2 = "However, here is a great place to eliminate your tiredness and worries of the day, but also fill your stomach and meet new friends. More importantly, Izakaya has a lot of inexpensive and delicious dishes, mainly Japanese dishes that match the wine. Next>>";
    var intro3 = "So are you ready to start experiencing the glamour of Izakaya bar? If you do, ring the bell on the left-side window or you can check out the other areas from the mainhall sign.";
   
var txts = [intro1, intro2, intro3]
var counter = 0;
function changeText() {
    document.getElementById('tag-one').innerHTML = txts[counter%3];
    counter++;  

}

var ldoor = document.getElementById("ldoor");

ldoor.style.transition = "1s";


function load(){
    ldoor.style.width = "50%";
  
}

function opendoor(){
    ldoor.style.width = "1%";
  
}

function haveFun() { 
    alert("Hello, ready to order?");
}

document.getElementById("myButton").onclick = function () {
    location.href = "foodbar.html";
};