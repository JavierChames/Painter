var mainDiv = $("#paintDiv");
var color1 = $("#PaletterBlue");
var color2 = $("#PaletterGreen");
var color3 = $("#PaletterYellow");
var color4 = $("#PaletterRed");
var x;
var y;

document.getElementById("myBtn").addEventListener("click", paintColor);

mainDiv.mousemove(function (e) {
  if (e.buttons == 1) {
    showCoords();
    draw();
  }
});


function showCoords() {
  x = event.clientX;
  y = event.clientY;
}

function draw() {
  var spanDot = $("<span/>");
  spanDot.css({
    "position": "absolute",
    "left": x,
    "top": y,
    "width": 2 + "px",
    "height": 2 + "px",
    "background-color": "black"
  })
  mainDiv.append(spanDot)
}
