// Use following code to generate a random number between 0 and 9. : `Math.floor(Math.random() * 10);`.
// Write a while loop and print 'not 5' in every iteration until number 5 gets randomly generated.
let randomNumber;

while ((randomNumber = Math.floor(Math.random() * 10)) !== 5) {
  console.log("not 5");
}

console.log("Number 5 generated!");
