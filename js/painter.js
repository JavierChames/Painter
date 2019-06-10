var mainDiv = $(".board");
var x;
var y;
var color = "blue";
var spanid = 1;
var clear = false;

var selColorTxt = document.getElementById("selColorTxt");


var PaletterBlue = document.getElementById("PaletterBlue");
PaletterBlue.addEventListener("click", function () {
  help_toogle_colors("blue")
});

var PaletterGreen = document.getElementById("PaletterGreen");
PaletterGreen.addEventListener("click", function () {
  help_toogle_colors("green")
});

var PaletterYellow = document.getElementById("PaletterYellow");
PaletterYellow.addEventListener("click", function () {
  help_toogle_colors("Yellow")
});

var PaletterRed = document.getElementById("PaletterRed");
PaletterRed.addEventListener("click", function () {
  help_toogle_colors("red")
});

var PaletterBrown = document.getElementById("PaletterBrown");
PaletterBrown.addEventListener("click", function () {
  help_toogle_colors("brown")
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
    "background-color": color,
    "border-radius": 10

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

function help_toogle_colors(Selectedcolor) {
  toogleClear();
  color = Selectedcolor;
  selColorTxt.style.color = color;
}
