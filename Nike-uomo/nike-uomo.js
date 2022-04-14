const productContainers = [...document.querySelectorAll(".slide-img")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

// slider
productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 593;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 593;
  });
});

setInterval(() => {
  let slide1 = document.getElementById(`slide1`);
  let slide2 = document.getElementById(`slide2`);

  if (slide2.classList.contains(`view`)) {
    slide2.classList.remove(`view`);
    slide1.style.transform = `translateX(7vw)`;
  } else {
    slide2.classList.add(`view`);
    slide1.style.transform = `translateX(-100vw)`;
  }
}, 5000);

//sign-in

document.getElementById("btnLogin").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("loginDiv").classList.add("view");
});

document.getElementById("btnLoginCloser").addEventListener("click", () => {
  document.getElementById("loginDiv").classList.remove("view");
});

email = document.getElementById(`emailSignIn`);
pass = document.getElementById(`passwordSignIn`);

document.getElementById(`signInBtn`).addEventListener(`click`, () => {
  let data = {
    email: email.value,
    pass: pass.value,
  };
  console.log(data);
});

// PopUp

window.addEventListener(`load`, () => {
  document.getElementById(`popUp`).classList.add(`view`);
});

document.getElementById(`btnPopUpAccept`).addEventListener(`click`, () => {
  document.getElementById(`popUp`).classList.remove(`view`);
});

document.getElementById(`btnPopUpInfo`).addEventListener(`click`, () => {
  document.getElementById(`infoPopUp`).style.display = `none`;
  document.getElementById(`moreInfoPopUp`).style.display = `flex`;
  document.getElementById(`divPopUp`).style.width = `35%`;
});

document.getElementById(`endBtnPopUp`).addEventListener(`click`, () => {
  document.getElementById(`popUp`).classList.remove(`view`);
});
