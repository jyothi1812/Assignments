/**
 * Calculates x raised to the power n.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function myPow(x: number, n: number): number {
    // Handle the base case for negative exponents
    // If n is negative, x^n is the same as (1/x)^-n
    let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }

    let result = 1;
    let currentProduct = x;

    // Iterative Binary Exponentiation
    while (N > 0) {
        // If N is odd, multiply the result by the current product
        if (N % 2 === 1) {
            result *= currentProduct;
        }
        
        // Square the base and halve the exponent
        currentProduct *= currentProduct;
        N = Math.floor(N / 2);
    }

    return result;
}

// Testing the examples
console.log(myPow(2.00000, 10));  // Output: 1024
console.log(myPow(2.10000, 3));   // Output: 9.261
console.log(myPow(2.00000, -2));  // Output: 0.25