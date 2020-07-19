var menuShowBtn = document.getElementById('menu-btn');
var menuHideBtn = document.getElementById('back-btn');
var menuDiv = document.getElementById('menu-div');

var langChooseBtn = document.getElementById('languages');
var langChooseWind = document.getElementById('languages-choose');



var isHidden = true;

menuShowBtn.addEventListener('click', showMenu);
menuHideBtn.addEventListener('click', hideMenu);

langChooseBtn.addEventListener('mouseover', showLanguages);

  menuHideBtn.style.display = 'none';
  menuDiv.style.display = 'none';

  langChooseWind.style.display = 'none';
  isHidden = true;
function showMenu() {
  $("#menu-btn").fadeOut(500);
  $("#back-btn").fadeIn(500);
  $("#menu-div").fadeIn(500);
  isHidden = false;
}
function hideMenu() {
  $("#menu-btn").fadeIn(500);
  $("#back-btn").fadeOut(500);
  $("#menu-div").fadeOut(500);
  isHidden = true;
    if(isHidden === true){
    $('#languages-choose').fadeOut(500);
    }
}
function showLanguages (){
  if (isHidden === false){
$("#languages-choose").fadeIn(500);
  }
}
