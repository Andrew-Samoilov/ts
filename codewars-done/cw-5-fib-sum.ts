console.log(` - * 5 kuy * Perimeter of squares in a rectangle * -`);

const perimeter = (n: number): number => {
    let a = 1;
    let b = 1;
    let sum = 2;
    for (let i = 3; i <= n + 1; i++) {

        let c = a + b;
        sum += c;
        a = b;
        b = c;
        // console.log(`С ${c}, Sum ${sum}`);
    }
    return sum * 4;
}

console.log(perimeter(5), `should return`, 80);
console.log(perimeter(7), 'should return', 216);
