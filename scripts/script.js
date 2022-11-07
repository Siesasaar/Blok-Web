// JavaScript Document
console.log("hi");

var openButton = document.querySelector("header > button");
var sluitButton = document.querySelector("nav button");
var nav = document.querySelector("nav");


// menu open
openButton.addEventListener("click", openMenu);

function openMenu(){
    nav.classList.add("openMenu");
}


// menu sluit
sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
    nav.classList.remove("openMenu")
}