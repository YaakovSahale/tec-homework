//!...............................2
console.log(`app is running`);

const arr = [];

for (let i = 0; i < 1000; i++) {
  arr[i] = i;
}

let sqrt = arr.map((num) => Math.sqrt(num).toFixed(1));
// console.log(sqrt);
//!..............................3

let evenNums = arr.filter(num => num % 2 == 0);
console.log(evenNums);