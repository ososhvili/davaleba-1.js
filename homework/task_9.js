// You have array. Inside this array you can have positive and negative numbers. Count a sum of positive numbers. Show result in console.

const arr = [1, 2, 3, 4, -5, -6];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) sum += arr[i];
}
console.log(sum);
