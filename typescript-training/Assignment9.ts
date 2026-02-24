//Assignment: Write a program to print * in triangle pattern
//1. If I will pass int rows = 5 then it should print triangle with 5 Rows

function printTriangle(rows: number): void {
  // The outer loop controls the number of rows. It runs 'rows' times.
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    // The inner loop controls the number of stars in each row.
    // The number of stars equals the current row number (i).
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    // After the inner loop completes, a newline character is added to move to the next line.
    console.log(pattern);
  }
}

// Pass int rows = 5 to print a triangle with 5 rows.
const rows = 5;
printTriangle(rows);