console.log(` - **** 5 kuy * First Variation on Caesar Cipher * -`);

function splitedRes(str: string) {
    let subStrLenth = Math.ceil(str.length / 5);
    let resArr = [];
    // console.log('sub string length = ', subStrLenth);

    for (let index = 0; index < 4; index++) {
        // console.log(`-`, str.substring(index * subStrLenth, index * subStrLenth + subStrLenth), '-');
        resArr[index] = str.substring(index * subStrLenth, index * subStrLenth + subStrLenth);
    }
    resArr[4] = str.substring(4 * subStrLenth, str.length);

    return resArr;
}

const movingShift = (s: string, shift: number) => {
    let res = '';

    // let letter = `Z`;
    // console.log(`${letter} char code`, letter.charCodeAt(0));

    // console.log(s);

    for (let index = 0; index < s.length; index++) {
        let elem = s[index].charCodeAt(0);

        if (elem < 64) {
            res += s[index];
        } else if (elem > 96) {
            let currentElement = elem + shift + index;
            // console.log(`1`, currentElement);
            while (currentElement > 122) {
                // console.log(`2`, currentElement);
                currentElement -= 26;
                // console.log(`3`, currentElement);
            }
            // console.log(`4`, String.fromCodePoint(currentElement));
            res += String.fromCodePoint(currentElement);
        } else if (elem < 91) {
            let currentElement = elem + shift + index;
            // console.log(`5`, currentElement);
            while (currentElement > 90) {
                // console.log(`6`, currentElement);
                currentElement -= 26;
                // console.log(`7`, currentElement);
            }
            // console.log(8`, String.fromCodePoint(currentElement));
            res += String.fromCodePoint(currentElement);
        }
    }

    return splitedRes(res);
}

const demovingShift = (arr: string[], shift: number) => {
    console.log('demoving');
    console.log(arr);
    let tmp = arr.join('');
    let res = '';

    for (let index = 0; index < tmp.length; index++) {
        let element = tmp[index].charCodeAt(0);
        let unShift = index + shift;
        // console.log(`tmp[${index}]'${tmp[index]}', element=${element}, unShift=${unShift}|`);

        if (element > 0 && element < 65) {
            // console.log(` > 0 and < 65 '${element}'`);
            res += tmp[index];
        }

        if (element > 64 && element < 91) {
            // console.log(`UPPERCASE, element > 64 and < 91 '${element}, unShift=${unShift}|'${String.fromCodePoint(unShift)}`);
            let foo = element - unShift;
            // console.log(` foo=${foo}`);
            while (foo < 65) {
                foo += 26;
                // console.log(`while +26, foo=${foo}`);
            }
            res += String.fromCodePoint(foo);
        }

        if (element > 96 && element < 123) {
            // console.log(`lowerase, element > 96 and < 123 '${element}, unShift=${unShift}|'${String.fromCodePoint(unShift)}`);
            let foo = element - unShift;
            // console.log(` foo=${foo}`);
            while (foo < 97) {
                foo += 26;
                // console.log(`while +26, foo=${foo}`);
            }
            res += String.fromCodePoint(foo);
        }
    }

    return res;
}

let u = "I should have known that you would have a perfect answer for me!!!"
// u = 'I should ';
// u = 'ZZZ Za';
// u = `For you bouquets and ribbon'd wreaths--for you the shores a - crowding`;
u = 'Exult, O shores, and ring, O bells! But I, with mournful tread, Walk the deck my Captain lies, Fallen cold and dead.';

console.log(u);

let foo = movingShift(u, 1);
console.log(foo);

// console.log(["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]);

console.log(demovingShift(foo, 1));
// console.log(u);
