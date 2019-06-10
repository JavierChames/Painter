var mainDiv = $(".board");
var x;
var y;
var color = "blue";
var spanid = 1;
var clear = false;

var selColorTxt = document.getElementById("selColorTxt");

var btnGroup = document.getElementById("colorGrp");
btnGroup.addEventListener("click", selecClr);

function selecClr(e) {
  var myColor = e.target.id;
  color = myColor;
}

function erase() {
  color = "white"
  clear = true;
}

mainDiv.on('mousemove', function (e) {
  if (e.buttons == 1) {
    showCoords(e);
    if (x + slider.value > 0) {
      draw(color);
    }
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
    "left": x - slider.value,
    "top": y - slider.value,
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
