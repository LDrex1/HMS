let input = document.querySelector('#booking-number');
let button = document.querySelector('#check-in-submit');

input.addEventListener("click", function () {
    button.removeAttribute('disabled');
})