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
