let greetUser = document.getElementById("greet-user");

let getDate = new Date();

let day = getDate.getDay();
let hours = getDate.getHours();
let year = getDate.getFullYear();
let month = getDate.getMonth() + 1;

let dateShow = document.getElementById("dateShow");
let time = document.getElementById("time");

setInterval(updateTimer, 500);

function updateTimer() {
  let getTime = new Date();
  let hours = getTime.getHours();
  let minutes = getTime.getMinutes();
  let seconds = getTime.getSeconds();

  let hoursId = document.getElementById("hours");
  let minutesId = document.getElementById("minutes");
  let secondsId = document.getElementById("seconds");

  if (hoursId.innerHTML < 10) {
    hoursId.innerHTML = "0" + hours;
  } else {
    hoursId.innerHTML = hours;
  }
  if (minutesId.innerHTML < 10) {
    minutesId.innerHTML = "0" + minutes;
  } else {
    minutesId.innerHTML = minutes;
  }
  if (secondsId.innerHTML < 10) {
    secondsId.innerHTML = "0" + seconds;
  } else {
    secondsId.innerHTML = seconds;
  }
}

if (day < 10 && month < 10) {
  dateShow.innerHTML = "0" + day + "/" + "0" + month + "/" + year;
} else {
  dateShow.innerHTML = day + "/" + month + "/" + year;
}

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
