let greetUser = document.getElementById("greet-user");

let getDate = new Date();

let hours = getDate.getHours();

if (hours == 00) {
  greetUser.innerHTML = "Good Night";
} else if (hours > 05 && hours < 12) {
  greetUser.innerHTML = "Good Morning";
} else if (hours > 12 && hours < 17) {
  greetUser.innerHTML = "Good Afternoon";
} else if (hours > 17 && hours < 23) {
  greetUser.innerHTML = "Good Evening";
}

function scrollDown() {
  window.scrollTo({
    top: 750,
    behavior: "smooth",
  });
}

let bars = document.querySelectorAll(".bars");
let hamburger = document.querySelector(".hamburger");
let navBlock = document.querySelector(".nav-block");

function runHams() {
  navBlock.classList.toggle("navToggle");
  hamburger.classList.toggle("rotate");
  bars[0].classList.toggle("barOneToggle");
  bars[2].classList.toggle("barTwoToggle");

  let animeBar = document.querySelectorAll(".aniMationBar");

  for (let i = 0; i < 4; i++) {
    animeBar[i].classList.toggle("toggBar");
  }
}

let semFourCard = document.querySelectorAll(".assignmentSubjects");
let semFourDownload = document.querySelectorAll(".assignmentSectionSub");

for (let i = 0; i < semFourCard.length; i++) {
  semFourCard[i].addEventListener("click", () => {
    semFourDownload[i].classList.toggle("topToggle");
  });
}
