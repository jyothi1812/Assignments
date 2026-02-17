// assignment (condition statements and loops)

const employees: Employee[] = [
    { name: "Alice Johnson", baseSalary: 75000, experience: 5.1, rating: 4.2 },
    { name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8 },
    { name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5 },
    { name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5 },
    { name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5 }
];

interface Employee {
    name: string;
    baseSalary: number;
    experience: number;
    rating: number;
}
const hikeMap = new Map<string, string>();
employees.forEach(emp => {
    let variablePayPct = 0;
    let bonus = 0;
      // 1. Determine Variable Pay % and Bonus based on Rating
    if (emp.rating >= 4.0) {
        variablePayPct = 0.15;
        bonus = 1500;
    } else if (emp.rating >= 3.0) {
        variablePayPct = 0.10;
        bonus = 1200;
    } else {
        variablePayPct = 0.03;
        bonus = 300;
    }
       // 2. Determine Extra Reward based on Experience
    const reward = emp.experience >= 5 ? 5000 : 0;

    // 3. Calculate Hike and Hike Percentage
    const hike = (emp.baseSalary * variablePayPct) + bonus + reward;
    const hikePercentage = (hike / emp.baseSalary) * 100;

    // Store in Map
    hikeMap.set(emp.name, hikePercentage.toFixed(2) + "%");
});

// 4. Print Results
console.log("Employee Hike Percentages:");
hikeMap.forEach((hikePct, name) => {
    console.log(`${name}: ${hikePct}`);
});








