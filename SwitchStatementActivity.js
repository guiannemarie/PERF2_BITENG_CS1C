// Prompt the user to enter a day of the week.
const day = prompt("Enter a day of the week (e.g., Monday, Tuesday):").toLowerCase();

// Use a switch statement to map each day to a specific task.
let task;
switch (day) {
  case "monday":
    task = "Finish your assignments.";
    break;
  case "tuesday":
    task = "Prepare for the meeting.";
    break;
  case "wednesday":
    task = "Work on the presentation.";
    break;
  case "thursday":
    task = "Review the project.";
    break;
  case "friday":
    task = "Plan for the weekend.";
    break;
  case "saturday":
    task = "Relax and recharge.";
    break;
  case "sunday":
    task = "Prepare for the week.";
    break;
  default:
    task = "Invalid day entered.";
}

// Log the task to the console.
console.log(`Your task for ${day} is: ${task}`);
