console.log(` - * 5 kuy * The Hashtag Generator * -`);

function generateHashtag(str: string): string | boolean {
    let tmpResult = ['#'];

    // console.log(str,'|', str.trim());

    if (str.trim().length === 0) return false;

    let tmpArray = str.split(' ');
    // console.log(tmpArray);

    for (let index = 0; index < tmpArray.length; index++) {
        // console.log(tmpArray[index], tmpArray[index].length);
        if (tmpArray[index].length !== 0) {
            let foo = tmpArray[index].split('');
            foo[0] = foo[0].toUpperCase();
            tmpResult.push(foo.join(''));
        }
    }

    let result = tmpResult.join('');
    if (result.length > 140) return false;
    return result;
}

console.log(generateHashtag(""), false, "Expected an empty string to return false");
console.log(generateHashtag(" ".repeat(200)), false, "Still an empty string");
console.log(generateHashtag(' Hello there thanks for trying my Kata'), '#HelloThereThanksForTryingMyKata');
console.log(generateHashtag('    Hello     world   '), '#HelloWorld');
console.log(generateHashtag("a".repeat(140)), false, "Too long");
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.");
console.log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.");
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.");
console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.");
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars");
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.");
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work");
