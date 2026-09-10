// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
const odds = scores.filter(n => n % 2 !== 0);
console.log("odds:", odds);

const doubled = odds.map(n => n * 2);
console.log("doubled:", doubled);

const sortedArr = doubled.sort((a, b) => b - a);
console.log("sorted:", sortedArr);

const halfLength = Math.ceil(sortedArr.length / 2);
const firstHalf = sortedArr.slice(0, halfLength);
console.log("firstHalf:", firstHalf);
// (b)
const resultb = scores
  .filter(n => n % 2 !== 0)
  .map(n => n * 2)
  .sort((a, b) => b - a)
  .filter((_, index, arr) => index < Math.ceil(arr.length / 2));
    
console.log("b result:", resultb);

// (c)
console.log("end:", scores);