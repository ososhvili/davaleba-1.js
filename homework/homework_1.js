// You have array `[2, 5, 9, 15, 0, 4]`. Using loop `for` and operator `if`, show in console, elements which are greater than 3, but lesser than 10.

const array = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 3 && array[i] < 10) {
    console.log(array[i]);
  }
}
