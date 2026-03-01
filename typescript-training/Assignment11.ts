function printCenteredDiamond(n: number): void {
  // 1. Top Half (1 to n)
  for (let i = 1; i <= n; i++) {
    let row = "";
    
    // Add leading spaces to center the row
    // The number of spaces is (n - i)
    for (let s = 0; s < n - i; s++) {
      row += " "; 
    }

    // Add numbers 1 to i
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }

  // 2. Bottom Half (n-1 down to 1)
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    
    // Add leading spaces (n - i)
    for (let s = 0; s < n - i; s++) {
      row += " ";
    }

    // Add numbers 1 to i
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

// Execute with peak value 5
printCenteredDiamond(5);
