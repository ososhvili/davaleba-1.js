// Write code for counting sum of all even values in array. Show result in console.

// ```js
// const arr = [1,2,3,4]

let arr = [1, 2, 3, 4];

const sumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
};

console.log(sumArr(arr));
