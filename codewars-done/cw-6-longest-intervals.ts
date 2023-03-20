console.log(` - * longest consecutive repetition * -`);

function longestRepetition(text: string): [string, number] {
    console.log(text);
    let res: [string, number] = ["", 0];

    function countLater(later: string, startPosition:number): number{
        let max = 1;
        for (let index = startPosition; index < text.length-1; index++) {
            if (text[index] === text[index + 1]) {
                max++;
            } else {
                return max;
            }       
        }
        return max;
    }

    for (let i = 0; i < text.length; i++) {             
        // console.log(text[i], countLater(text[i], i), i);

        if (countLater(text[i], i) > res[1]) {
            res[0] = text[i];
            res[1] = countLater(text[i], i);
        }
    }

    return res;
}

// console.log(longestRepetition("aaaabb"), ["a", 4]);
console.log(longestRepetition("bbbaaabaaaa"), ["a", 4]);
// console.log(longestRepetition("cbdeuuu900"), ["u", 3]);
      console.log(longestRepetition("abbbbb"), ["b", 5]);
// console.log(longestRepetition("aabb"), ["a", 2]);
// console.log(longestRepetition("ba"), ["b", 1]);
// console.log(longestRepetition(""), ["", 0]);
