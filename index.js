function runBars() {
  let barOne = document.querySelector(".barOne");
  let barTwo = document.querySelector(".barTwo");
  let barThi = document.querySelector(".barThi");
  let barBlock = document.querySelector(".navBlock");

  barOne.classList.toggle("barOneMove");
  barTwo.classList.toggle("barTwoMove");
  barThi.classList.toggle("barThiMove");
  barBlock.classList.toggle("navCall");
}

let spanChev = document.querySelectorAll(".fa-chevron-down");

function osOpener() {
  let asOsOP = document.getElementById("asOsOP");

  spanChev[0].classList.toggle("rot");
  asOsOP.classList.toggle("osOpener");
}

function dbmsOpener() {
  let asDbmsOp = document.getElementById("asDbmsOP");
  spanChev[1].classList.toggle("rot");

  asDbmsOp.classList.toggle("osOpener");
}

function cgOpener() {
  let asCgOp = document.getElementById("asCgOP");
  spanChev[2].classList.toggle("rot");

  asCgOp.classList.toggle("osOpener");
}
function misOpener() {
  let asMisOp = document.getElementById("asMisOP");
  spanChev[3].classList.toggle("rot");

  asMisOp.classList.toggle("osOpener");
}

function dsOpener() {
  let asDsOp = document.getElementById("asDsOP");
  spanChev[4].classList.toggle("rot");

  asDsOp.classList.toggle("osOpener");
}

window.onscroll = function () {
  let winY = window.scrollY;

  if (winY > 100) {
    let navStick = document.getElementById("navStick");

    navStick.classList.add("mainSticky");
  } else {
    navStick.classList.remove("mainSticky");
  }
};
