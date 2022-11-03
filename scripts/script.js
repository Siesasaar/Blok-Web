// JavaScript Document
console.log("hi");

var eersteImagesButton =
document.querySelector("section.images li:nth-of-type(1 button");

eersteImagesButton.addEventListener("click", eersteImagesButtonKlik);

function eersteImagesButtonKlik() {
    eersteImagesButton.classList.toggle("menuOpen");
}