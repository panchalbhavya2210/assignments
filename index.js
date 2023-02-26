let greetUser = document.getElementById("greet-user");

let getDate = new Date();

let day = getDate.getDate();
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

if (day < 10 || month < 10) {
  dateShow.innerHTML = "0" + day + "/" + month + "/" + year;
} else {
  dateShow.innerHTML = day + "/" + month + "/" + year;
}

if (month < 10) {
  dateShow.innerHTML = day + "/" + "0" + month + "/" + year;
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

let bars = document.querySelectorAll(".bars");
let hamburger = document.querySelector(".hamburger");
let navBlock = document.querySelector(".nav-block");

function runHams() {
  navBlock.classList.toggle("navToggle");
  hamburger.classList.toggle("rotate");
  bars[0].classList.toggle("barOneToggle");
  bars[2].classList.toggle("barTwoToggle");
  bars[1].classList.toggle("barOneOToggle");

  let positonNav = document.getElementById("positionNav");

  positonNav.classList.toggle("fixedNav");

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

// let dochoster = document.querySelector(".docLogo");

// dochoster.onclick = (event) => {
//   let iteration = 0;

//   clearInterval(interval);

//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if (index < iteration) {
//           return event.target.dataset.value[index];
//         }

//         return letters[Math.floor(Math.random() * 26)];
//       })
//       .join("");

//     if (iteration >= event.target.dataset.value.length) {
//       clearInterval(interval);
//     }

//     iteration += 1 / 3;
//   }, 50);
// };
let subTogg = document.querySelectorAll(".subjectAndLins");
let sliderMain = document.querySelector(".sliderMain");
let sliderSub = document.querySelector(".sliderSub");

for (let i = 0; i < subTogg.length; i++) {
  subTogg[i].onclick = function () {
    let val = subTogg[i].classList.value;
    console.log(val);

    subTogg[i].classList.toggle("subToggle");
  };
}

const option = {
  root: null,
  rootMargin: "-150px 0px -0px 0px",
  threshold: 0.1,
};

// const observerOne = new IntersectionObserver(function (entries) {
//   entries.forEach((entriAssigned) => {
//     let sliderMain = document.querySelectorAll(".sliderMain");
//     let semName = document.querySelectorAll(".sem4");
//     let lineSub = document.querySelector(".lineSub");
//     let assignedtitle = document.querySelector(".assigned-title");
//     if (entriAssigned.isIntersecting) {
//       sliderMain[0].classList.add("sliderMainSlide");
//       sliderMain[1].classList.add("sliderMainSlide");
//       semName[0].classList.add("sem4Opq");
//       semName[1].classList.add("sem4Opq");
//       lineSub.classList.add("lineInc");
//       assignedtitle.classList.add("assTitle");
//     } else {
//       sliderMain[0].classList.remove("sliderMainSlide");
//       sliderMain[1].classList.remove("sliderMainSlide");
//       lineSub.classList.remove("lineInc");
//       semName[0].classList.remove("sem4Opq");
//       semName[1].classList.remove("sem4Opq");
//       lineSub.classList.remove("lineInc");
//       assignedtitle.classList.remove("assTitle");
//     }
//   });
// }, option);

const assignment = document.querySelector(".assignment");

observerOne.observe(assignment);

let footerMain = document.querySelector(".footerMain");

const observerTwo = new IntersectionObserver(function (entries, event) {
  entries.forEach((entriAssigned) => {
    if (entriAssigned.isIntersecting) {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      let interval = null;
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        let docTitle = document.getElementById("docTitle");

        docTitle.innerText = docTitle.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return docTitle.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= docTitle.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 50);
    } else {
      console.log("neeeeeeeeeeeeeigh");
    }
  });
}, option);

observerTwo.observe(footerMain);

function runUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function runToAss() {
  if (window.innerWidth < 555) {
    window.scrollTo({
      top: 780,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 610,
      behavior: "smooth",
    });
  }
}
function scrollDown() {
  if (window.innerWidth < 555) {
    window.scrollTo({
      top: 780,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 610,
      behavior: "smooth",
    });
  }
}
