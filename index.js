let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");
let title = document.querySelector(".title");
let head = document.querySelector(".head");
let icon = document.querySelector(".all .icon i");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let section = document.querySelector("section");
let home = document.querySelector("section .home");
let body = document.querySelector("body");
let scrollBar = document.querySelector(".scroll-barre");
let hero = document.querySelector("div .hero");
let about = document.querySelector("ul li .about");

window.addEventListener("scroll", function () {
  let valueScroll = this.window.scrollY;

  sec1.style.clipPath = "circle(" + valueScroll * 1.35 + "px at 0 0)";
  sec2.style.clipPath = "circle(" + valueScroll * 0.9 + "px at 100% 100%)";
  if (valueScroll / (body.clientHeight - window.innerHeight) > "0.8") {
    title.style.display = "none";
    left.style.display = "none";
  } else {
    title.style.display = "block";
    left.style.display = "block";
  }
  scrollBar.style.width = `${
    (valueScroll / (body.clientHeight - this.window.innerHeight)) * 100
  }%`;
});

// Light & Dark Mode
icon.addEventListener("click", (e) => {
  const currentMode = section.dataset.mode;
  if (currentMode === "light") {
    document.documentElement.style.setProperty("--dark-color", "#FEFEF9");
    document.documentElement.style.setProperty("--white-color", "#333");
    section.dataset.mode = "dark";
    // e.target.innerHTML = " Light";
  } else if (currentMode === "dark") {
    document.documentElement.style.setProperty("--dark-color", "#333");
    document.documentElement.style.setProperty("--white-color", "#FEFEF9");
    section.dataset.mode = "light";
    // e.target.innerHTML = " Dark";
  }
  const audio = new Audio();
  audio.src = "./Audio/public_pop.mp3";
  audio.play();
});

let nameL = "elzero";
class User {
  constructor(id, name) {
    this.i = id;
    this.n = name;
  }
  sayHello() {
    return "hello";
  }
}
console.log(User.prototype);
Object.prototype.love = "FrontEnd";
