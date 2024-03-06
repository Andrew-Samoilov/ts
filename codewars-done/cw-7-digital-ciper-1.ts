console.log(` - * 7 kuy * Digital Cypher, 1 * -`);

function encode(str: string, n: number): number[] {
    const letterNumber: Record<string, number> = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    };

    const keyArray = n.toString().split('').map(Number);
    let currentKeyIndex = 0;
    let res: number[] = [];

    // console.log(str, keyArray, currentKeyIndex);

    for (let index = 0; index < str.length; index++) {
        console.log(`word[${index}] ${str[index]}, letterNumber ${letterNumber[str[index]]}`, currentKeyIndex);

        res.push(letterNumber[str[index]] + keyArray[currentKeyIndex]);
        (currentKeyIndex >= keyArray.length - 1) ? currentKeyIndex = 0 : currentKeyIndex++;
    }

    return res;
}

console.log(encode("scout", 1939), [20, 12, 18, 30, 21]);
console.log(encode("masterpiece", 1939), [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);
