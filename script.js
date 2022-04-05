/* ROTATE ICONS */

const menu = document.getElementById("ham-svg");

function rotate() {
  const menu = document.getElementById("ham-svg");

  menu.style.transform = "rotate(360deg)";
}

document.getElementById("ham-svg").addEventListener("click", rotate);

document.getElementById("search-svg").addEventListener("click", rotate);

let box = document.getElementById("searchmenu"),
  btn = document.getElementById("search-svg");

const navmenu = document.getElementById("navmenu");

/* SHOW MENU' */

function showNavMenu() {
  document.getElementById("navmenu").style.display = "flex";
}
document.getElementById("ham-svg").addEventListener("click", showNavMenu);

/* HIDE MENU' */

function hideNavMenu() {
  document.getElementById("navmenu").style.display = "none";
}
document.getElementById("exitmenu").addEventListener("click", hideNavMenu);

/* SEARCHBAR MENU */

const search = document.getElementById("search-svg");

/*SHOW SEARCHBAR MENU' */

function showSearchMenu() {
  document.getElementById("searchmenu").style.display = "flex";
  document.getElementById("ham-svg").style.display = "none";
  document.getElementById("searchmenu").style.opacity = "1";
  
}
document.getElementById("search-svg").addEventListener("click", showSearchMenu);

/* HIDE SEARCHBAR MENU' */

function hideSearchMenu() {
  document.getElementById("searchmenu").style.display = "none";
  document.getElementById("searchmenu").style.opacity = "0";
}
document
  .getElementById("exit-searchmenu")
  .addEventListener("click", hideSearchMenu);
