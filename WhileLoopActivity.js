// Generate a random number between 1 and 10 (inclusive).
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Use a while loop to keep asking until the user guesses the correct number.
let guess;
while (true) {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));

  //Check for invalid input
  if (isNaN(guess) || guess < 1 || guess > 10) {
    console.log("Invalid input. Please enter a number between 1 and 10.");
    continue; // Go to the next iteration of the loop
  }


  if (guess < secretNumber) {
    console.log("Too low!");
  } else if (guess > secretNumber) {
    console.log("Too high!");
  } else {
    console.log("Correct!");
    break; // Exit the loop if the guess is correct.
  }
}
