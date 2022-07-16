let guestsDropdownBtn1 = document.querySelector('#sort-btn-guests-1');
let guestsDropdown1 = document.querySelector('#sort-dropdown-guests-1');

guestsDropdownBtn1.addEventListener("click", function () {
  guestsDropdown1.classList.toggle("hide");
});

let guestsDropdownBtn2 = document.querySelector('#sort-btn-guests-2');
let guestsDropdown2 = document.querySelector('#sort-dropdown-guests-2');

guestsDropdownBtn2.addEventListener("click", function () {
  guestsDropdown2.classList.toggle("hide");
});

let guestsDropdownBtn3 = document.querySelector('#sort-btn-guests-3');
let guestsDropdown3 = document.querySelector('#sort-dropdown-guests-3');

guestsDropdownBtn3.addEventListener("click", function () {
  guestsDropdown3.classList.toggle("hide");
});

let guestsDropdownBtn4 = document.querySelector('#sort-btn-guests-4');
let guestsDropdown4 = document.querySelector('#sort-dropdown-guests-4');

guestsDropdownBtn4.addEventListener("click", function () {
  guestsDropdown4.classList.toggle("hide");
});

let guestDropdowns = document.querySelectorAll('.btn-dropdown');
let guestDropdownItems = document.querySelectorAll('.dropdown-item');

guestDropdownItems.forEach(dropdownItem => {
  dropdownItem.addEventListener("click", function() {
    for (let i = 0; i < guestDropdowns.length; i++) {
      guestDropdowns[i].classList.add("hide");
    }
  });
});


window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button') && !event.target.matches('.dropdown-button-text') && !event.target.matches('.dropdown-button-span') && !event.target.matches('.dropdown-button-icon')) {
    for (let i = 0; i < guestDropdowns.length; i++) {
      let openDropdown = guestDropdowns[i];
      if (!openDropdown.classList.contains('hide')) {
        openDropdown.classList.add('hide');
      }
    }
  }
}

$(document).ready(function(){
    $("body").on("click",".table-guest-name",function(){
      $("#adminTableModal").modal("show");   
    });
  });

let guestTabBtns = document.querySelectorAll('.guest-tab-btn');
let guestTabPages = document.querySelectorAll('.guest-tab-page');

guestTabBtns.forEach(tabBtn => {
  tabBtn.addEventListener("click",function() {
    for (let i = 0; i < guestTabBtns.length; i++) {
      guestTabBtns[i].classList.remove('current');
      guestTabPages[i].classList.add('hide');
      guestTabPages[i].classList.remove('show');
      
    }

    let pageTarget = document.querySelector(`${tabBtn.dataset.page}`);

    tabBtn.classList.add('current');
    pageTarget.classList.remove('hide');
    pageTarget.classList.add('show');
    
  });
});