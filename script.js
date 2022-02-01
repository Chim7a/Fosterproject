// Using the selector to get access to the harmburger menubar.

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
     hamburger.classList.remove("active");
     navMenu.classList.remove("active");
 }))

// Using the selector to get access to the moving animations.
// const leftToright = document.getElementsByClassName("main-content2");

//  const leftToright = () => {
//     document.getElementsByClassName("main-content2").style.animation = "mynewmove 40s 2";
//   }

// Using the selector to get access to the dark and light mode.

// const darkMode = () => {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// }

// <button onclick="darkMode()">Toggle dark mode</button>