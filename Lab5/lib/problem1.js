let input;
let limit;
let primes = [];


function validateInput(input) {
    if (typeof input !== 'number' || !Number.isInteger(input) || input <= 0) {
        return false;
    }else {
        return true;
    }
}

function findPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}

function displayPrimes(primes, limit) { 
    if (primes.length === 0) {
        return alert(`No prime numbers found.`);
    } else {
        return alert(`For n = ${limit} prime numbers are ${primes}`);
    }
}