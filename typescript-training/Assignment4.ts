// Conditional statements
interface transactions {
id:number;
amount:number;
transactionType: 'Credit'| 'Debit';
}

let transactionAmounts: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let transactionnumber: transactions[] = [];

  for (const val of transactionAmounts) {
    let tType: "Credit" | "Debit";

     if (val >= 0) {
       tType = "Credit";
    } else {
        tType = "Debit";
    }

     transactionnumber.push({
        id: transactionnumber.length + 1,
        amount: val,
        transactionType: tType
});
  }
// 3. Count Transactions
let creditCount = 0;
let debitCount = 0;

for (const item of transactionnumber) {
    if (item.transactionType === "Credit") {
        creditCount++;
    } else {
        debitCount++;
    }
      
}

// 4. Print Results to console
console.log("--- Transaction Summary ---");
console.log(`Total Credit Transactions: ${creditCount}`);
console.log(`Total Debit Transactions: ${debitCount}`);


let sumCredited:number = 0;
let sumDebited:number = 0;
 for (const val of transactionnumber) {
    

    if(val.transactionType == "Credit")
    {
        sumCredited += val.amount;

    }
    else
    {
        sumDebited +=val.amount
    }
}
 
const totalBalance = sumCredited+sumDebited;
console.log(`Total Amount Credited: ${sumCredited}`); // Result: 57000
console.log(`Total Amount Debited: ${sumDebited}`);   // Result: -20500
console.log(`Final Net Balance: ${totalBalance}`);

let finalBalance:number = 0;

// Loop through your ledger collection
for (const record of transactionnumber) {
    // Adding positive and negative numbers calculates the net balance
    finalBalance += record.amount;
}

// Print the final result to the console
console.log(`Total amount remaining at the end in Bank Account: ${finalBalance}`);

let suspiciousCount = 0;

console.log("--- Checking for Suspicious Activity ---");

for (const record of transactionnumber) {
    // Check if the amount exceeds +/- 10000
   if (record.amount > 10000 || record.amount < -10000) {
        
        console.log(`Suspicious ${record.transactionType} Transaction with Amount: ${record.amount}`);
        suspiciousCount++;
   }
}

console.log(`Total number of suspicious transactions: ${suspiciousCount}`);








