const menu = document.getElementById("ham-svg")

function rotate(){
    
    const menu = document.getElementById("ham-svg");

    menu.style.transform = "rotate(360deg)"
   }

document.getElementById("ham-svg").addEventListener("click", rotate)

document.getElementById("search-svg").addEventListener("click", rotate)