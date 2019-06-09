var mainDiv = $(".board");
var x;
var y;
var color = "black";
var spanid = 1;
var clear = false;

var PaletterBlue = document.getElementById("PaletterBlue");
PaletterBlue.addEventListener("click", function () {
  toogleClear();
  color = "blue"
});

var PaletterGreen = document.getElementById("PaletterGreen");
PaletterGreen.addEventListener("click", function () {
  toogleClear();
  color = "green"
});

var PaletterYellow = document.getElementById("PaletterYellow");
PaletterYellow.addEventListener("click", function () {
  toogleClear();
  color = "Yellow"
});

var PaletterRed = document.getElementById("PaletterRed");
PaletterRed.addEventListener("click", function () {
  toogleClear();
  color = "red"
});

var PaletterBrown = document.getElementById("PaletterBrown");
PaletterBrown.addEventListener("click", function () {
  toogleClear();
  color = "brown"
});

function erase() {
  color = "white"
  clear = true;
}

mainDiv.on('mousemove', function (e) {
  if (e.buttons == 1) {
    showCoords(e);
    draw(color);
  }
});

function showCoords(e) {
  if (e.buttons == 1) {
    x = e.clientX - mainDiv[0].offsetLeft;
    y = e.clientY - mainDiv[0].offsetTop;
    draw(color);
  }
}

function draw(color) {
  var spanDot = $("<span/>");
  spanDot.attr("id", "spanid" + spanid++);
  spanDot.css({
    "position": "absolute",
    "left": x,
    "top": y,
    "width": slider.value + "px",
    "height": slider.value + "px",
    "background-color": color
  })
  mainDiv.append(spanDot);
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

$("#eraser").click(function () {
  $(this).toggleClass("selected");
});

function toogleClear() {
  if (clear === true) {
    $("#eraser").toggleClass("selected");
    clear = false;
  }
}