var	link = document.querySelector(".search__btn");
var form = document.querySelector(".search__form");

var dateOfArrival = form.querySelector("[name=date-of-arrival]");
var dateOfDeparture = form.querySelector("[name=date-of-departure]");
var amountOfAdults = form.querySelector("[name=amount-of-adults]");
var amountOfChildren = form.querySelector("[name=amount-of-children]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("amountOfAdults");
    } catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("search-form--invisible");
    if (storage) {
        amountOfAdults.value = storage;
        amountOfChildren.focus();
    } else {
        amountOfAdults.focus();
    }
});

form.addEventListener("submit", function (evt) {
    if (!dateOfArrival.value || !dateOfDeparture.value || !amountOfAdults.value || !amountOfChildren.value) {
        evt.preventDefault();
        form.classList.remove("search-form--error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("search-form--error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("amountOfAdults", amountOfAdults.value);
        }
    }
});