var mainDiv = $(".board");
var x;
var y;
var color = "black";
var spanid = 1;
// var clear = false;

var PaletterBlue = document.getElementById("PaletterBlue");
PaletterBlue.addEventListener("click", function () {
  $("#eraser").toggleClass("selected");
  color = "blue"
});

var PaletterGreen = document.getElementById("PaletterGreen");
PaletterGreen.addEventListener("click", function () {
  $("#eraser").toggleClass("selected");
  color = "green"
});

var PaletterYellow = document.getElementById("PaletterYellow");
PaletterYellow.addEventListener("click", function () {
  $("#eraser").toggleClass("selected");
  color = "Yellow"
});

var PaletterRed = document.getElementById("PaletterRed");
PaletterRed.addEventListener("click", function () {
  $("#eraser").toggleClass("selected");
  color = "red"
});

var PaletterBrown = document.getElementById("PaletterBrown");
PaletterBrown.addEventListener("click", function () {
  $("#eraser").toggleClass("selected");
  color = "brown"
});

// var spanRemove = document.getElementById("PaletterGreen");
// PaletterGreen.addEventListener("click", function () {
//   $("#eraser").toggleClass("selected");
//   color = "green"
// });



function erase() {
  // if (clear === false) {
  // clear = true;
  // } else {
  // if (clear === true) {
  // clear = false;
  // var idClicked = jQuery(this).attr('id');
  // Removes an element from the document
  // var element = document.getElementById(idClicked);
  // element.parentNode.removeChild(element);
  // }

  color = "white"
  // }
  // }
}

mainDiv.on('mousemove', function (e) {
  if (e.buttons == 1) {
    showCoords(e);
    draw(color);
  }
});

mainDiv.on('click', function (e) {
  if (clear === true) {
    // if (e.buttons == 1) {
    var idClicked = jQuery(this).attr('id');
    // Removes an element from the document
    var element = document.getElementById(idClicked);
    console.log(element.tagName);
    // element.parentNode.removeChild(element);
  }


  // showCoords(e);
  // draw(color);
  // }

  // var idClicked = jQuery(this).attr('id');
  // Removes an element from the document
  // var element = document.getElementById(idClicked);
  // element.parentNode.removeChild(element);
  // }




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