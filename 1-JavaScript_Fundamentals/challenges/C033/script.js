let lastPrime;
let primes;

do {

    lastPrime = +prompt('Enter the last number for a sequence of primes.', '');

    if (!lastPrime) {
        alert('Try again.');
        
    } else {
        for (let num = 2; num <= lastPrime; num++) {
            if (num == 2) {
                primes = `${num}, `;

            } else {
                let prime = true;
                for (let count = 2; count <= num; count++) {
                    if (count != num && num % count == 0) {
                        prime = false;
                    }
                }

                if (prime) {
                    primes += `${num}, `;
                }
            }
        }

        if (lastPrime == 1) {
            alert(1)
            break
            
        } else {
            alert(`${primes} end.`);
            break;
        }
    }

} while (true);