var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".btn-primary");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var colors = document.getElementById("showcolor");


function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function showRandomColor(){
    var col1 = getRandomColor();
    var col2 = getRandomColor();
    c1.value = col1;
    c2.value = col2;
    body.style.background = "linear-gradient(to right," + col1+", " + col2 + " )";
    colors.innerHTML = "background-color:" + body.style.background;
}

function backgroundColor(){
    body.style.background = "linear-gradient(to right," + color1.value +", " + color2.value + " )";
}

function backgroundColor1(){
    body.style.background = "linear-gradient(to right," + col1+", " + col2 + " )";
}

color1.addEventListener("input",backgroundColor);
color2.addEventListener("input",backgroundColor);
