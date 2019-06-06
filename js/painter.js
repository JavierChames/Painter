var mainDiv = $("#paintDiv");
// var color1 = $("#PaletterBlue");
// var color2 = $("#PaletterGreen");
// var color3 = $("#PaletterYellow");
// var color4 = $("#PaletterRed");
var x;
var y;
var spanDot;
var color ="black";

  
var PaletterBlue=document.getElementById("PaletterBlue");
PaletterBlue.addEventListener("click", function(){
  color="blue"
});
// paintColor("blue"));

var PaletterGreen =document.getElementById("PaletterGreen");
PaletterGreen.addEventListener("click", function(){
  color="green"
});

// PaletterGreen.addEventListener("click", paintColor("green"));

var PaletterYellow =document.getElementById("PaletterYellow");
PaletterYellow.addEventListener("click", function(){
  color="Yellow"
});

// PaletterYellow.addEventListener("click", paintColor("yellow"));

var PaletterRed =document.getElementById("PaletterRed");

// PaletterRed.addEventListener("click", paintColor("red"));

PaletterRed.addEventListener("click", function(){
  color="red"
});


// function paintColor(selectedColor){
  // console.log(selectedColor);
//  if(selectedColor === "blue"){
//    color="blue";
//   // spanDot.css({"background-Color": "blue"});
//  }
//  if(selectedColor === "green"){
//   color="green";
//  }
//   //  spanDot.setAttribute("background-color","blue");
//   // css("background-color": "blue");

//   console.log("blue");
// }



mainDiv.mousemove(function (e) {
  if (e.buttons == 1) {
    showCoords(e);
    draw(color);
  }
});


function showCoords(e) {
  x = e.clientX;
  y = e.clientY;
  // console.log(x,y);
}

function draw(color) {
   spanDot = $("<span/>");
  spanDot.css({
    "position": "absolute",
    "left": x,
    "top": y,
    "width": 3 + "px",
    "height": 3 + "px",
    "background-color": color
  })
  mainDiv.append(spanDot)
}

