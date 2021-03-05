function myFunction() {
    var intro1 = "居酒屋・いざかや" 
    document.getElementById("tag-one").innerHTML = intro1; 
    document.getElementById("tag-one").style.fontFamily = "Trebuchet MS, sans-serif";
}

var mouse = {y:200};
var yPos = 0;
mc = document.getElementById("sun");
document.addEventListener('mousemove', onMove, false);
function onEnter () {
  
  yPos = mouse.y - mc.offsetHeight/2;
  console.log( mc.offsetLeft);
  mc.style.top = ( mc.offsetTop + ( mouse.y - mc.offsetTop - mc.offsetHeight/2 ) * 0.05 ) + 'px';
  requestAnimationFrame( onEnter );
}

function onMove (e) {
  mouse.y = e.pageY;
}

requestAnimationFrame( onEnter );
