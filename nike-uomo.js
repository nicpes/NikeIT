const productContainers = [...document.querySelectorAll(".slide-img")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 593;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 593;
  });
});

document.getElementById("btnLogin").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("loginDiv").classList.add("view");
});

document.getElementById("btnLoginCloser").addEventListener("click", () => {
  document.getElementById("loginDiv").classList.remove("view");
});

window.addEventListener(`DOMContentLoaded` () => {
  
})