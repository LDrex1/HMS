function passwordToggleCurrent(){
    var input = document.getElementById("current-password");
    var eyeOpen = document.getElementById("eye-open1");
    var eyeClosed = document.getElementById("eye-closed1");
  
    if (input.type ==="password"){
      input.type = "text";
      eyeClosed.style.display = "none";
      eyeOpen.style.display = "block";
    }
    else{
      input.type = "password";
      eyeOpen.style.display = "none";
      eyeClosed.style.display = "block";  
    }
  }
  
  function passwordToggleNew(){
    var input = document.getElementById("new-password");
    var eyeOpen = document.getElementById("eye-open2");
    var eyeClosed = document.getElementById("eye-closed2");
  
    if (input.type ==="password"){
      input.type = "text";
      eyeClosed.style.display = "none";
      eyeOpen.style.display = "block";
    }
    else{
      input.type = "password";
      eyeOpen.style.display = "none";
      eyeClosed.style.display = "block";  
    }
  }
  
  function passwordToggleConfirm(){
    var input = document.getElementById("confirm-password");
    var eyeOpen = document.getElementById("eye-open3");
    var eyeClosed = document.getElementById("eye-closed3");
  
    if (input.type ==="password"){
      input.type = "text";
      eyeClosed.style.display = "none";
      eyeOpen.style.display = "block";
    }
    else{
      input.type = "password";
      eyeOpen.style.display = "none";
      eyeClosed.style.display = "block";  
    }
  }

let settingsTabBtns = document.querySelectorAll('.settings-tab-btn');
let settingsTabPages = document.querySelectorAll('.settings-tab-page');

settingsTabBtns.forEach(tabBtn => {
  tabBtn.addEventListener("click",function() {
    for (let i = 0; i < settingsTabBtns.length; i++) {
      settingsTabBtns[i].classList.remove('current');
      settingsTabPages[i].classList.add('hide');
    }

    let pageTarget = document.querySelector(`${tabBtn.dataset.page}`);

    tabBtn.classList.add('current');
    pageTarget.classList.remove('hide');
  })
})