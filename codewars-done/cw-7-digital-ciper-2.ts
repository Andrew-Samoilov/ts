console.log(` - * 7 kuy * Digital Cypher, 2 * -`);

function decode(code: number[], n: number): string {
    const letterNumber: Record<number, string> = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g',
        8: 'h',
        9: 'i',
        10: 'j',
        11: 'k',
        12: 'l',
        13: 'm',
        14: 'n',
        15: 'o',
        16: 'p',
        17: 'q',
        18: 'r',
        19: 's',
        20: 't',
        21: 'u',
        22: 'v',
        23: 'w',
        24: 'x',
        25: 'y',
        26: 'z',
    };

    const keyArray = n.toString().split('').map(Number);
    let currentKeyIndex = 0;
    let res = '';

    // console.log(code, keyArray, currentKeyIndex);

    code.map((el) => {
        res += letterNumber[el - keyArray[currentKeyIndex]];
        (currentKeyIndex >= keyArray.length - 1) ? currentKeyIndex = 0 : currentKeyIndex++;
    })

    return res;
}

console.log(decode([20, 12, 18, 30, 21], 1939), "scout");
console.log(decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939), "masterpiece");
