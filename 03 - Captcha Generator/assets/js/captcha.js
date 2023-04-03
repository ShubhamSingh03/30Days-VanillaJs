// selecting dom values
const captchaText = document.querySelector(".captcha");
const reloadCaptchaBtn = document.querySelector(".reload");
const inputText = document.querySelector(".input-text input");
const verifyCaptchaBtn = document.querySelector(".verify");
const responseText = document.querySelector(".response");

// array of uppercase, lowercase and nos. chars
let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

// generating random text for captcha display
const generateRandomCaptchaText = () => {
  for (let i = 0; i < 6; i++) {
    let randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    captchaText.innerText += ` ${randomCharacter}`;
  }
};
generateRandomCaptchaText();

// action => new random captcha text
reloadCaptchaBtn.addEventListener("click", () => {
  removeInputText();
  generateRandomCaptchaText();
});

// action => verify inputText == captchaText
verifyCaptchaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  responseText.style.display = "block";

  let inputValue = inputText.value.split("").join(" ");

  if (inputValue == captchaText.innerText) {
    responseText.style.color = "#008000";
    responseText.innerText = "Captcha Matched, You can proceed..";
    setTimeout(() => {
      removeInputText();
      generateRandomCaptchaText();
    }, 2000);
  } else {
    responseText.style.color = "#ff0000";
    responseText.innerText = "Captcha not matched. Please try again!";
  }
});

// cleanup input text box
const removeInputText = () => {
  inputText.value = "";
  captchaText.innerText = "";
  responseText.style.display = "none";
};
