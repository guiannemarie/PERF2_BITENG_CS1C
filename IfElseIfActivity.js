// Prompt the user to enter their score.
const score = parseInt(prompt("Enter your score:"));

// Check for invalid input.
if (isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid score. Please enter a number between 0 and 100.");
} else {
  let grade;
  if (score >= 90) {
    grade = "Excellent";
  } else if (score >= 80) {
    grade = "Good";
  } else if (score >= 70) {
    grade = "Fair";
  } else {
    grade = "Needs Improvement";
  }
  console.log(`Your grade is: ${grade}.`);
}
