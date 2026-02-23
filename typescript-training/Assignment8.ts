//Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
//indexes.
//1. Find total number of occurrences
//2. Print count and Indexes of the word
const paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more";
const searchTerm:string = "Java";

function findOccurrences(text: string, word: string): void {
    const indexes: number[] = [];
    let currentIndex: number = text.indexOf(word);

    // Loop through the string until no more matches are found
    while (currentIndex !== -1) {
        indexes.push(currentIndex);
        // Search again starting from the character after the last match
        currentIndex = text.indexOf(word, currentIndex + 1);
    }

    // Output results
    console.log(`Total number of occurrences: ${indexes.length}`);
    console.log(`Indexes of the word: ${indexes.join(", ")}`);
}
findOccurrences(paragraph, searchTerm);