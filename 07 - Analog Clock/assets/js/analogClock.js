const degree = 6;
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondHand = document.querySelector("#second-hand");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
});

setInterval(() => {
  const date = new Date();
  const hh = date.getHours() * 30;
  const mm = date.getMinutes() * degree;
  const ss = date.getSeconds() * degree;

  hourHand.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minuteHand.style.transform = `rotateZ(${mm}deg)`;
  secondHand.style.transform = `rotateZ(${ss}deg)`;
});
