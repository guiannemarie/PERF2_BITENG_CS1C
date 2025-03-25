// Prompt the user to enter their age.
const age = parseInt(prompt("Enter your age:")); // Use parseInt to convert the input to a number.

// Check the age and log the appropriate message.
if (isNaN(age)) {
  console.log("Invalid input. Please enter a number for your age.");
} else if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}
