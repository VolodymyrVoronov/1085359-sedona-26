var	link = document.querySelector(".search__btn");
var form = document.querySelector(".search__form");

var dateOfArrival = form.querySelector("[name=date-of-arrival]");
var dateOfDeparture = form.querySelector("[name=date-of-departure]");
var amountOfAdults = form.querySelector("[name=amount-of-adults]");
var amountOfChildren = form.querySelector("[name=amount-of-children]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("search-form--invisible");
});

form.addEventListener("submit", function (evt) {
    if (!dateOfArrival.value || !dateOfDeparture.value || !amountOfAdults.value || !amountOfChildren.value) {
        evt.preventDefault();
        form.classList.remove("search-form--error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("search-form--error");
    }
});