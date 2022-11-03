// JavaScript Document
console.log("hi");

var openButton =
document.querySelector("header > button");

openButton.addEventListener("click", openMenu);

function openMenu() {

var deNav =
document.querySelector("nav");

deNav.classList.add("toonMenu")
}