let checkIn = document.querySelector('#check-in');
let checkOut = document.querySelector('#check-out');
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; 
let yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
let dateToday = `${yyyy}-${mm}-${dd}`;

window.addEventListener("load", () => {
    checkIn.setAttribute("min", dateToday);
    checkOut.setAttribute("min", dateToday);
});

checkIn.addEventListener("change", () => {
    console.log(checkIn.value);
    checkOut.setAttribute("min", checkIn.value);
});