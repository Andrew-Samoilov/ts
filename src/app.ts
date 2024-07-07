console.log(` - *** 4 kuy * Catching Car Mileage Numbers * `);

function isInteresting(n: number, awesomePhrases: number[]): number {
    let res = 0;

    //checking awesomePhrases array
    for (let index = 0; index < awesomePhrases.length; index++) {
        if (n > awesomePhrases[index]) {
            res = 0;
        }
        if (n === awesomePhrases[index]) {
            res = 2;
            return res;
        }
        if ((awesomePhrases[index] - n) <= 2 && (awesomePhrases[index] - n)>0) {
            res = 1;
            
            // console.log(awesomePhrases[index], n);
            return res;
        }
    }

    let foo = 0;
    foo = Number((n + ' ').slice(1, -1));
    // console.log(n, foo);

    //all zero exept 1st 1000, 90000
    if (n > 9 && foo === 0) {
        res = 2;
        return res;
    }

    return res;
}


console.log(isInteresting(3, [1337, 256]), 0);
console.log(isInteresting(1336, [1337, 256]), 1);
console.log(isInteresting(1337, [1337, 256]), 2);
console.log(isInteresting(11208, [1337, 256]), 0);
// console.log(isInteresting(11209, [1337, 256]), 1);
// console.log(isInteresting(11211, [1337, 256]), 2);

console.log(isInteresting(10000, [1337, 256]), 2);
