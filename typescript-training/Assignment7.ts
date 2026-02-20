//Write a program to perform the following tasks:
//1. Count the total number of words in the sentence.
//2. Print the sentence words in reverse order.
//3. Convert the first character of each word to uppercase and print original sentence

let sentence:string = "Java programming is fun and challenging";
function countWords(sentence:string)
{
let count = 1;
for(let char of sentence)
{
    if(char == ' '){
    count++;
}
}
return count ;
}

console.log("No of words",countWords(sentence))

// Print the sentence words in reverse.
let reverseString:string = "";
for (let i = sentence.length-1;i>=0;i--)
{
    reverseString +=sentence.charAt(i);

}
console.log(reverseString)

// Convert the first character of each word to uppercase and print original sentence
const toSentenceCase = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const letterofeachword = toSentenceCase(sentence);
console.log(letterofeachword);




