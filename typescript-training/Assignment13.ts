//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
//non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include
//letters and numbers.
//Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s: string): boolean {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Print the cleaned string as you requested
    console.log(cleanStr); 
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // RETURN the comparison (Crucial to avoid 'undefined')
    return cleanStr === reversedStr;
}

// Example usage:
const s = "A man, a plan, a canal: Panama";
const result = isPalindrome(s);

console.log("Is palindrome:", result);
