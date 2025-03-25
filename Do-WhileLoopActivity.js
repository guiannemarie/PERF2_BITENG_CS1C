// Set the correct password.
const correctPassword = "correctPassword";

// Use a do-while loop to keep asking for the password until it matches the correct one.
let password;
do {
  password = prompt("Enter your password:");
  if (password !== correctPassword) {
    console.log("Incorrect, try again.");
  }
} while (password !== correctPassword);

// Log a success message when the correct password is entered.
console.log("Access granted.");
