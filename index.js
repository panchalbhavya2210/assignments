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

function osOpener() {
  let asOsOP = document.getElementById("asOsOP");

  asOsOP.classList.toggle("osOpener");
}

function dbmsOpener() {
  let asDbmsOp = document.getElementById("asDbmsOP");

  asDbmsOp.classList.toggle("osOpener");
}

function cgOpener() {
  let asCgOp = document.getElementById("asCgOP");

  asCgOp.classList.toggle("osOpener");
}
function misOpener() {
  let asMisOp = document.getElementById("asMisOP");

  asMisOp.classList.toggle("osOpener");
}
function dsOpener() {
  let asDsOp = document.getElementById("asDsOP");

  asDsOp.classList.toggle("osOpener");
}
