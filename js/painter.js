var mainDiv = $(".board");
var x;
var y;
var color = "black";

var PaletterBlue = document.getElementById("PaletterBlue");
PaletterBlue.addEventListener("click", function () {
  color = "blue"
});

var PaletterGreen = document.getElementById("PaletterGreen");
PaletterGreen.addEventListener("click", function () {
  color = "green"
});

var PaletterYellow = document.getElementById("PaletterYellow");
PaletterYellow.addEventListener("click", function () {
  color = "Yellow"
});

var PaletterRed = document.getElementById("PaletterRed");
PaletterRed.addEventListener("click", function () {
  color = "red"
});

var PaletterBrown = document.getElementById("PaletterBrown");
PaletterBrown.addEventListener("click", function () {
  color = "brown"
});


function erase() {
  color = "white"
};

mainDiv.on('mousemove', function (e) {
  if (e.buttons == 1) {
    showCoords(e);
    draw(color);
  }
});

function showCoords(e) {
  if (e.buttons == 1) {
    x = e.clientX;
    y = e.clientY;
    draw(color);
  }
}

function draw(color) {
  var spanDot = $("<span/>");
  spanDot.css({
    "position": "absolute",
    "left": x - mainDiv[0].offsetLeft,
    "top": y - mainDiv[0].offsetTop,
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
slider.oninput = function () {
  output.innerHTML = this.value;
}