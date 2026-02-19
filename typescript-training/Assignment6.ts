//given number is a prime number or not
function isPrime(n:number) : boolean {
    // Primes are intergers >= 2
    if(!Number.isInteger(n) || n<2) 
        return false;
    // Handle small cases
    if (n==2) return true;
    if(n% 2 == 0) return false;
    
    // check odd diviors
    for(let i=3;i*i <=n;i +=2)
    {
        if(n%i == 0) 
        return false;
    }
    return true;
}
console.log(isPrime(7));