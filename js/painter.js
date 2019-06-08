var mainDiv = $(".board");
// var mainDiv = document.getElementsByClassName("board");

var x;
var y;
var color = "black";


var PaletterBlue = document.getElementById("PaletterBlue");
PaletterBlue.addEventListener("click", function () {
  color = "blue"
  // this.style.border="5px solid black";


});

var PaletterGreen = document.getElementById("PaletterGreen");
PaletterGreen.addEventListener("click", function () {
  color = "green"
  // this.style.border="5px solid black";

});


var PaletterYellow = document.getElementById("PaletterYellow");
PaletterYellow.addEventListener("click", function () {
  color = "Yellow"
  // this.style.border="5px solid black";

});


var PaletterRed = document.getElementById("PaletterRed");
PaletterRed.addEventListener("click", function () {
  color = "red"
  // this.style.border="5px solid black";

});

var PaletterBrown = document.getElementById("PaletterBrown");

PaletterBrown.addEventListener("click", function () {
  color = "brown"
  // this.style.border="5px solid black";

});


function erase() {
  color = "white"
};



// mainDiv.addEventListener("mousemove", showCoords());
// {

mainDiv.on('mousemove',function(e) {
  if (e.buttons == 1) {
    showCoords(e);
    draw(color);
  }
});
// }

function showCoords(e) {
  if (e.buttons == 1){
    // var posi=mainDiv.position();
    // x1 =posi.left;
    // y1=posi.top;
  x = e.clientX;
  y = e.clientY;
  draw(color);
  // var x1 = $(".board").position();
    // alert("Top position: " + x1.top + " Left position: " + x1.left);

  // console.log(x +","+y);
}}

function draw(color) {
  var spanDot = $("<span/>");
  spanDot.css({
    "position": "absolute",
    "left": x- mainDiv[0].offsetLeft,
    "top": y-mainDiv[0].offsetTop,
    "width": slider.value + "px",
    "height": slider.value + "px",
    "background-color": color
  })
  mainDiv.append(spanDot)
}

function clearBoard() {
  var board = $(".board");
  board.empty();
}


var slider = document.getElementById("myRange");
var output = document.getElementById("font");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

