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
