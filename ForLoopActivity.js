// 1. Print numbers from 1 to 10 using a for loop.
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Modify the program to print only even numbers between 1 and 10.
console.log("\nEven numbers from 1 to 10:");
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

//Alternative approach using the modulo operator (%)
console.log("\nEven numbers from 1 to 10 (using modulo operator):");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
