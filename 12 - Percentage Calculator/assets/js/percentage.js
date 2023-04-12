const calculateButton = document.getElementsByClassName("btn");

calculateButton[0].addEventListener("click", () => {
  const physicsScore = parseFloat(
    document.getElementById("physics-score").value
  );
  const chemistryScore = parseFloat(
    document.getElementById("chemistry-score").value
  );
  const mathsScore = parseFloat(document.getElementById("math-score").value);
  const computerScienceScore = parseFloat(
    document.getElementById("cs-score").value
  );
  const englishScore = parseFloat(document.getElementById("eng-score").value);

  if (
    !physicsScore ||
    !chemistryScore ||
    !mathsScore ||
    !computerScienceScore ||
    !englishScore
  ) {
    document.getElementById("result").innerHTML =
      "Error: Please enter valid scores for all subjects.";
    return;
  }

  const totalScore =
    physicsScore +
    chemistryScore +
    mathsScore +
    computerScienceScore +
    englishScore;
  const percentage = ((totalScore / 500) * 100).toFixed(2);
  let grade;

  if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 40) {
    grade = "C";
  } else {
    grade = "F";
  }

  const passFailMessage = percentage >= 39.5 ? "Pass" : "Fail";

  document.getElementById(
    "result"
  ).innerHTML = `Total Marks Out of 500: ${totalScore} <br/> Percentage: ${percentage}% <br/> Grade: ${grade} (${passFailMessage})`;
});
