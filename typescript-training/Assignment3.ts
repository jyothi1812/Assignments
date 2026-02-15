
const names: string[] = ["Suresh", "Mahesh", "Naresh"];
const marks: number[] = [75, 80, 82];

// 2. Define a Union Type for the storage array
// This allows the array to technically hold either strings or numbers
let updatedMarks: (number | string)[] = [];

let totalSum: number = 0;

// 3. Update marks using assignment operators
for (let i = 0; i < marks.length; i++) {
    let currentMark = marks[i];
    
    // Addition assignment operator (+=) to add 10 marks
    currentMark += 10; 
    
    // Store in the new array using index assignment (=)
    updatedMarks[i] = currentMark;
    
    // Add to total for average calculation
    totalSum += currentMark;
}

// 4. Calculate the average
const average: number = totalSum / names.length;

// 5. Display the expected output
console.log("Updated Marks:");
names.forEach((name, index) => {
    console.log(`${name}: ${updatedMarks[index]}`);
});

console.log(`Average Marks: ${average.toFixed(1)}`);




