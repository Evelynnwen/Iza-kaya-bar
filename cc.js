function myFunction() {
    document.getElementById("tag-one").style.color = "black";
    var intro1 = "Welcome to Izakaya Showroom.  ";
    var intro2 = "In here, you can play and interactive with texts, buttons and objects.";
    var intro3 = "You just have to Click them, So Have Fun :)"; 

    document.getElementById("tag-one").innerHTML =
    intro1 + "<br>" + intro2 + "<br>" + intro3; 
}

var ldoor = document.getElementById("ldoor");

ldoor.style.transition = "1s";


function load(){
    ldoor.style.width = "50%";
  
}

function opendoor(){
    ldoor.style.width = "1%";
  
}

var hiddenword; 
if ( hiddenword === undefined ){ 
    console.log("Better to click everything, don't miss tags.");

}


document.getElementById("twister").innerHTML ="Humor is the prominent characteristic of brain twister, therefore:";
function changeOurText(){
    var x = 4 + 4;
    document.getElementById("tag-two").innerHTML = "Because they already" + " " + x ;
    document.getElementById("tag-two").style.color = "Brown"
}

function gotYou() { 
    alert("Hey, didn't you read the sign, what did you expect?");  
    document.getElementById("tag-five").innerHTML = "Got you!!";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#d2bda4";   
}

function noName() {
    var home = "I wonder where I take you";
    var result = home.link("https://www.youtube.com/watch?v=gqZvmytP64o");
    document.getElementById("tag-four").innerHTML = result;
}


function myPop() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

function uLink() {
    var x = document.getElementById("ulink");
    if (window.getComputedStyle(x).display === "none") {
      x.style.display = "block";
    }
  }

function treaBox() {
    var boxx = "Set Off!";
    var trea = boxx.link("https://seoyoung-98.github.io/mytreasureBox/");
    document.getElementById("treabox").innerHTML = trea;
}

function myBoat() { 
    alert("Your passphrase for going to the garden of Avalon is 'https://shiqing-w.github.io/Garden/'. You may go there through the search bar of your browser, Good Luck!");  
}

function mySnack() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
