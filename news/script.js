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
  
  document.getElementById("navmenu").style.opacity = "1";
  document.getElementById("navmenu").style.visibility = "visible"
  document.getElementById("ham-svg").style.visibility = "hidden"
  document.getElementById("exitmenu").style.visibility = "visible"
  links.forEach((element)=> element.style.color = "white")
  ul.style.marginBottom = "50px"

}
const ul = document.getElementById("centermenu")
const links = document.querySelectorAll("a")
document.getElementById("ham-svg").addEventListener("click", showNavMenu);

/* CHANGE COLOR UL NAVMENU */
const link = document.getElementById("lim")
function changeCol(){ links.forEach((element)=>{ element.style.color = "gray"})}


ul.addEventListener("mouseover", changeCol)



/* HIDE MENU' */

function hideNavMenu() {
  document.getElementById("navmenu").style.display = "none";
  document.getElementById("ham-svg").style.visibility = "visible"
  links.forEach((element)=> element.style.color = "black")
  links.forEach((element)=>element.style.transition = "all 0s ease")
}

document.getElementById("exitmenu").addEventListener("click", hideNavMenu);


/* SEARCHBAR MENU */

const search = document.getElementById("search-svg");

/*SHOW SEARCHBAR MENU' */

function showSearchMenu() {
  document.getElementById("searchmenu").style.display = "flex";
  document.getElementById("ham-svg").style.display = "none";
  document.getElementById("searchmenu").style.opacity = "1";
  document.getElementById("searchmenu").style.visibility = "visible"
  nikenews.style.marginLeft = "-30px"
  
}
const nikenews = document.getElementById("nikenews")
document.getElementById("search-svg").addEventListener("click", showSearchMenu);

/* HIDE SEARCHBAR MENU' */

function hideSearchMenu() {
  document.getElementById("searchmenu").style.display = "none";
  document.getElementById("searchmenu").style.opacity = "0";
}
document
  .getElementById("exit-searchmenu")
  .addEventListener("click", hideSearchMenu)
