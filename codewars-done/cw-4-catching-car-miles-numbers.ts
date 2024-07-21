console.log(` - * 4 kuy * Catching Car Mileage Numbers * `);

function isInteresting(n: number, awesomePhrases: number[]): number {
    // console.log(`n`, n, `awesomePhrases`, ...awesomePhrases);
    let res = 0;

    function isInterestingCurrentNuber(n2: number): number {
        if (n2 <= 99) return 0;

        //all zero exept 1
        let foo = Number((n2 + ' ').slice(1, -1));
        if (n2 > 9 && foo === 0) return 2;

        //all the same 11111 , 888
        let strArr = String(n2).split('');
        if (strArr.every((currentValue: string) => currentValue === strArr[0])) return 2

        //palindrom 1234321
        let str = String(n2);
        let leftHalfStr = str.slice(0, str.length / 2);
        let rightHalfStr = str.slice(-1 * str.length / 2);
        let reverseRightHalfStr = rightHalfStr.split('').reverse().join('');
        if (leftHalfStr === reverseRightHalfStr) return 2;

        const digits = n2.toString().split('').map(char => parseInt(char, 10));
        let res2 = 0;
        let res3 = 0;

        for (let index = 0; index < digits.length - 1; index++) {
            if (digits[index + 1] === digits[index] + 1) {
                res2 = 2;
            } else if (digits[index] === 9 && digits[index + 1] === 0) {
                res2 = 2;
                break;
            } else {
                res2 = 0;
                break;
            }
        }

        for (let index = 0; index < digits.length - 1; index++) {
            //decrementing
            if (digits[index + 1] === digits[index] - 1) {
                res3 = 2;
            } else if (digits[index] === 1 && digits[index + 1] === 0) {
                res3 = 2;
            } else {
                res3 = 0;
                break;
            }
        }

        if (res2 > res3) return res2; else return res3;
    }


    //checking awesomePhrases array
    for (let index = 0; index < awesomePhrases.length; index++) {
        if (n === awesomePhrases[index]) return 2;
        if ((awesomePhrases[index] - n) <= 2 && (awesomePhrases[index] - n) > 0) return 1;
    }

    //testing next 3 value
    if (isInterestingCurrentNuber(n) === 2) return 2;
    if (isInterestingCurrentNuber(n + 1) === 2) return 1;
    if (isInterestingCurrentNuber(n + 2) === 2) return 1;

    return res;
}


console.log(isInteresting(3, [1337, 256]), 0);
console.log(isInteresting(1336, [1337, 256]), 1);
console.log(isInteresting(1337, [1337, 256]), 2);
console.log(isInteresting(11208, [1337, 256]), 0);
console.log(isInteresting(11209, [1337, 256]), 1);
console.log(isInteresting(11211, [1337, 256]), 2);
console.log(isInteresting(90000, [1337, 256]), 2);
console.log(isInteresting(12345, [1337, 256]), 2);
console.log(isInteresting(98765432109, [1337, 256]), 2);
console.log(isInteresting(1234321, [1337, 256]), 2);
console.log(isInteresting(98, []), 1);
console.log(isInteresting(122, []), 1);
console.log(isInteresting(123, []), 2);
console.log(isInteresting(11011, []), 2);
console.log(isInteresting(99, []), 1);
console.log(isInteresting(100, []), 2);
console.log(isInteresting(122, []), 1);
console.log(isInteresting(7890, []), 2);
console.log(isInteresting(3210, []), 2);
console.log(isInteresting(109, []), 1);
