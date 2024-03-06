console.log(` - * 7 kuy * Digital Cypher, 2 * -`);

function decode(code: number[], n: number): string {
    const alphabet: string = ' abcdefghijklmnopqrstuvwxyz';
    const keyArray = n.toString().split('').map(Number);
    return code.map((el, i) => alphabet[el - keyArray[i % keyArray.length]]).join('');
}

console.log(decode([20, 12, 18, 30, 21], 1939), "scout");
console.log(decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939), "masterpiece");
