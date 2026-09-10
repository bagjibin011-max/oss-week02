// P2. Diamond  (commit: "p2: diamond")
//
// node p2_diamond.js 5   prints a 5-wide diamond of '*'.
// n comes from process.argv[2]. Default: 5. Use only odd n.
//
//   *
//  ***
// *****
//  ***
//   *

const n = Number(process.argv[2] ?? 5);

// TODO: print the diamond with for / if and console.log.
// Hint: for row i, count the spaces and the stars separately.
// Hint: "*".repeat(3) gives "***".

const mid = Math.floor(n / 2);
for (let i = 0; i < n; i++) {
  const row = i <= mid ? i : n - 1 - i;
  const spaces = " ".repeat(mid - row);
  const stars = "*".repeat(2 * row + 1);
  console.log(spaces + stars);
}