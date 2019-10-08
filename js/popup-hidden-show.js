var	link = document.querySelector(".search__btn");
var form = document.querySelector(".search__form");

var send = form.querySelector(".search-form__btn");
var dateOfArrival = form.querySelector("[name=date-of-arrival]");
var dateOfDeparture = form.querySelector("[name=date-of-departure]");
var amountOfAdults = form.querySelector("[name=amount-of-adults]");
var amountOfChildren = form.querySelector("[name=amount-of-children]");

var storage = {};

storage.amountOfAdults = localStorage.getItem("amount-of-adults");
storage.amountOfChildren = localStorage.getItem("amount-of-children");

if (storage.amountOfAdults) {
    amountOfAdults.value = storage.amountOfAdults;
} 
if (storage.amountOfChildren) {
    amountOfChildren.value = storage.amountOfChildren;
}

form.classList.add("search-form--invisible");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.remove("search-form--error");
    form.classList.toggle("search-form--visible");
    form.classList.toggle("search-form--invisible");
});

form.addEventListener("submit", function (evt) {
    if (!dateOfArrival.value || !dateOfDeparture.value || !amountOfAdults.value || !amountOfChildren.value) {
        evt.preventDefault();
        form.classList.remove("search-form--error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("search-form--error");
    } else {
        localStorage.setItem("amount-of-adults", amountOfAdults.value);
        localStorage.setItem("amount-of-children", amountOfChildren.value);
        
    }
});