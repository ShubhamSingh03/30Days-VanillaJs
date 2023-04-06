const images = document.querySelectorAll(".container img");
const choices = ["rock", "paper", "scissors"];

images.forEach((img) => {
  img.addEventListener("click", () => {
    playRPSGame(img.id);
  });
});

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
};

const getHumanChoice = (word) => {
  return choices.indexOf(word.toLowerCase());
};

const getResult = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    return "Tie";
  } else if (
    (humanChoice === 0 && computerChoice === 1) ||
    (humanChoice === 1 && computerChoice === 2) ||
    (humanChoice === 2 && computerChoice === 0)
  ) {
    return "Computer Wins";
  } else {
    return "You win";
  }
};

const playRPSGame = (humanChoice) => {
  const humanChoiceIndex = getHumanChoice(humanChoice);
  const computerChoice = getComputerChoice();
  const result = getResult(humanChoiceIndex, choices.indexOf(computerChoice));
  const message = `Your choice is ${choices[humanChoiceIndex]} and Computer choice is ${computerChoice} <br> Round:  ${result}`;
  document.getElementById("message").innerHTML = message;
};
