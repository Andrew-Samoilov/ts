console.log(` - * Perfect Square. * -`);

function perfectSquare(string: string): boolean {
    let foo2 = string.split('\n');
    // console.log(foo2, foo2[0].length, foo2.length);
    if (foo2[0].length !== foo2.length) {
        // console.log(`${foo2[0]} foo2[0].length !== foo2.length ${foo2[0].length !== foo2.length}`);
        return false;
    }

    if (string.includes('.')) {
        let foo = string.split('\n').join('').split(',').join('');
        if (Number.isInteger(Math.sqrt(foo.length))) {
            // console.log(`Number.isInteger(Math.sqrt(foo.length)) ${Number.isInteger(Math.sqrt(foo.length)) }`);
            return true;
        }
    }
    return false;
}

console.log(perfectSquare("..\n.."), true, "Perfect!");
console.log(perfectSquare("...\n...\n..."), true, "Perfect!");
console.log(perfectSquare("...\n,..\n..."), false, "I have complexes :x");
console.log(perfectSquare(",,,\n,,,\n,,,"), false, "Hey im squared!But im not perfect");
console.log(perfectSquare(".\n.......\n.\n"), false, "Для хітроумних");
console.log(perfectSquare("."), true, "One dot");
console.log(perfectSquare(".\n.\n.\n"), false, "Three dots");
