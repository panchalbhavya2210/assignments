let arrayNew = [
  {
    java: {
      0: 1,
    },
    database: {
      0: 1,
    },
  },
];

let signUpFormBlock = document.getElementById("signUpFormBlock");

signUpFormBlock.onclick = function () {
  let signUpForm = document.getElementById("signUpForm");

  signUpForm.classList.add("toggleSignUp");
  selectOption.classList.remove("toggleSignUpDialogue");
};

let closeSignUp = document.getElementById("closeSignUp");

closeSignUp.onclick = function () {
  let signUpForm = document.getElementById("signUpForm");

  signUpForm.classList.remove("toggleSignUp");
};

let loginFormBlock = document.getElementById("loginFormBlock");

loginFormBlock.onclick = function () {
  let loginForm = document.getElementById("loginForm");

  loginForm.classList.add("loginToggle");
  selectOption.classList.remove("toggleSignUpDialogue");
};

let closeLogIn = document.getElementById("closeLogIn");

closeLogIn.onclick = function () {
  let loginForm = document.getElementById("loginForm");

  loginForm.classList.remove("loginToggle");
};

let updateProfile = document.getElementById("updateProfile");

updateProfile.onclick = function () {
  let profileBlock = document.getElementById("profileBlock");

  profileBlock.classList.add("profileVis");
  selectOption.classList.remove("toggleSignUpDialogue");
};

let closeProfile = document.getElementById("closeProfile");

closeProfile.onclick = function () {
  let profileBlock = document.getElementById("profileBlock");

  profileBlock.classList.remove("profileVis");
};

let profilePicClick = document.getElementById("profilePicHead");

profilePicClick.onclick = function () {
  let selectOption = document.getElementById("selectOption");

  selectOption.classList.toggle("toggleSignUpDialogue");
};
let profilePicClickMob = document.getElementById("profilePicHeadMob");

profilePicClickMob.onclick = function () {
  let selectOption = document.getElementById("selectOption");

  selectOption.classList.toggle("toggleSignUpDialogue");
};

let greetUser = document.getElementById("greet-user");

let getDate = new Date();

let day = getDate.getDate();
let hours = getDate.getHours();
let year = getDate.getFullYear();
let month = getDate.getMonth() + 1;
//1
let dateShow = document.getElementById("dateShow");
let time = document.getElementById("time");

setInterval(updateTimer, 500);

let getExam = document.getElementById("getExam");

getExam.onmouseover = function (e) {
  let examSched = document.getElementById("examSched");

  examSched.classList.add("toggleTable");
};
getExam.onmouseleave = function (e) {
  let examSched = document.getElementById("examSched");

  examSched.classList.remove("toggleTable");
};

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
  dateShow.innerHTML = "0" + day + "/" + "0" + month + "/" + year;
} else {
  dateShow.innerHTML = "0" + day + "/" + month + "/" + year;
}

// if (month < 10) {
//   dateShow.innerHTML = day + "/" + "0" + month + "/" + year;
// } else {
//   dateShow.innerHTML = day + "/" + month + "/" + year;
// }

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
  navBlock.classList.add("navToggle");
  hamburger.classList.add("rotate");
  bars[0].classList.add("barOneToggle");
  bars[2].classList.add("barTwoToggle");
  bars[1].classList.add("barOneOToggle");

  // let navigationBar = document.getElementById("navigationBar");

  // navigationBar.classList.toggle("assFix");

  let positonNav = document.getElementById("positionNav");

  positonNav.classList.add("fixedNav");

  let animeBar = document.querySelectorAll(".aniMationBar");

  for (let i = 0; i < 4; i++) {
    animeBar[i].classList.add("toggBar");
  }
}

function runOutHams() {
  navBlock.classList.remove("navToggle");
  hamburger.classList.remove("rotate");
  bars[0].classList.remove("barOneToggle");
  bars[2].classList.remove("barTwoToggle");
  bars[1].classList.remove("barOneOToggle");

  // let navigationBar = document.getElementById("navigationBar");

  // navigationBar.classList.toggle("assFix");

  let positonNav = document.getElementById("positionNav");

  positonNav.classList.remove("fixedNav");

  let animeBar = document.querySelectorAll(".aniMationBar");

  for (let i = 0; i < 4; i++) {
    animeBar[i].classList.remove("toggBar");
  }
}

let semFourCard = document.querySelectorAll(".assignmentSubjects");
let semFourDownload = document.querySelectorAll(".assignmentSectionSub");

for (let i = 0; i < semFourCard.length; i++) {
  semFourCard[i].addEventListener("click", () => {
    semFourDownload[i].classList.toggle("topToggle");
  });
}

// let dochoster = document.querySelector
// (".docLogo");

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
let assignedArrow = document.querySelectorAll(".assignedArrow");
let circleLogo = document.querySelectorAll(".circleLogo");

for (let i = 0; i < subTogg.length; i++) {
  subTogg[0].classList.add("subToggle");
  assignedArrow[0].classList.add("rotArr");
  circleLogo[0].classList.add("bordRad");

  subTogg[i].onclick = function () {
    subTogg[i].classList.toggle("subToggle");

    sliderMain.classList.add("topToggle");
    sliderSub.classList.add("topToggle");
    assignedArrow[i].classList.toggle("rotArr");
    circleLogo[i].classList.toggle("bordRad");
  };
}

const option = {
  root: null,
  rootMargin: "-150px 0px -0px 0px",
  threshold: 0.1,
};

const observerOne = new IntersectionObserver(function (entries) {
  entries.forEach((entriAssigned) => {
    let students = document.querySelector(".students");
    let boldAss = document.querySelector(".boldAss");
    let lightRed = document.querySelector(".lightRed");
    let disNine = document.querySelector(".disNine");
    let allDisSub = document.querySelectorAll(".subjectAndLins");

    if (entriAssigned.isIntersecting == true) {
      students.classList.add("waveToggle");
      boldAss.classList.add("textToggle");
      lightRed.classList.add("textToggle");
      disNine.classList.add("textToggle");
      for (let i = 0; i < allDisSub.length; i++) {
        allDisSub[i].classList.add("subToggleOpacity");
      }
    } else {
      students.classList.remove("waveToggle");
      boldAss.classList.remove("textToggle");
      lightRed.classList.remove("textToggle");
      disNine.classList.remove("textToggle");
      for (let i = 0; i < 4; i++) {
        allDisSub[i].classList.remove("subToggleOpacity");
      }
    }
  });
}, option);

const assignment = document.querySelector(".assignMentNew");

observerOne.observe(assignment);

let footerMain = document.querySelector(".footerMain");

const observerTwo = new IntersectionObserver(function (entries, event) {
  entries.forEach((entriAssigned) => {
    let mainBlurToggle = document.querySelector(".mainBlur");
    if (entriAssigned.isIntersecting) {
      mainBlurToggle.classList.add("mainTogg");
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
      mainBlurToggle.classList.remove("mainTogg");

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

function changeInputType() {
  let password = document.getElementById("password");
  let eyeImg = document.getElementById("eyeImg");

  let textType = "text";
  let passType = "password";

  if (password.type == passType) {
    eyeImg.src = "./img/eye-svgrepo-com.svg";
    password.type = textType;
  } else {
    eyeImg.src = "./img/eyesvgrepo-com.svg";
    password.type = passType;
  }
}

function changeInputTypeLogin() {
  let password = document.getElementById("passwordLogin");
  let eyeImg = document.getElementById("eyeImgLogIn");

  let textType = "text";
  let passType = "password";

  if (password.type == passType) {
    eyeImg.src = "./img/eye-svgrepo-com.svg";
    password.type = textType;
  } else {
    eyeImg.src = "./img/eye-off-svgrepo-com.svg";
    password.type = passType;
  }
}
