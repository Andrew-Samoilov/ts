console.log(` - * // 5 kuy * First Variation on Caesar Cipher * -`);

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
            let globalShift = elem + shift + index;
            // console.log(`1`, globalShift);
            while (globalShift > 122) {
                // console.log(`2`, globalShift);
                globalShift -= 26;
                // console.log(`3`, globalShift);
            }
            // console.log(`4`, String.fromCodePoint(globalShift));
            res += String.fromCodePoint(globalShift);
        } else if (elem < 91) {
            let globalShift = elem + shift + index;
            // console.log(`5`, globalShift);
            while (globalShift > 90) {
                // console.log(`6`, globalShift);
                globalShift -= 26;
                // console.log(`7`, globalShift);
            }
            // console.log(8`, String.fromCodePoint(globalShift));
            res += String.fromCodePoint(globalShift);
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
        console.log(`tmp[${index}]'${tmp[index]}', element=${element}`);
        let globalUnShift = element - shift - index;

        if (element < 65) {
            res += tmp[index];
            // console.log(` < 65 =`, tmp[index], '- element', element, 'unShift', globalUnShift);
        } else if (element > 96) { //small latter

            while (globalUnShift > 122) {
                globalUnShift += 26;
            }
            res += String.fromCodePoint(globalUnShift);
        } else if (element < 91) { //uppercase latter

            // console.log(`8`, globalUnShift, String.fromCodePoint(globalUnShift));
            while (globalUnShift < 65) {
                globalUnShift += 26;
            }
            // console.log(`9`, globalUnShift, String.fromCodePoint(globalUnShift));
            res += String.fromCodePoint(globalUnShift);
        }

    }

    return res;
}

let u = "I should have known that you would have a perfect answer for me!!!"
// u = 'ZZZZa';
// u = `For you bouquets and ribbon'd wreaths--for you the shores a - crowding`;
// u = 'Exult, O shores, and ring, O bells! But I, with mournful tread, Walk the deck my Captain lies, Fallen cold and dead.';

console.log(u);

let foo = movingShift(u, 1);
console.log(foo);

console.log(["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]);

console.log(demovingShift(foo, 1));
// console.log(u);
