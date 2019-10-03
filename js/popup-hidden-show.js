var	link = document.querySelector(".search__btn")

var popup = document.querySelector(".search__form");
var close = popup.querySelector(".search-form--visible");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("search-form--visible");
});