console.log(` - * 6 Consecutive strings * -`);

function longestConsec(strarr: string[], k: number): string {
  console.log(`strarr: ${strarr}; k ${k}`);
  let res = "";
  let maxLength = 0;

  for (let index = 0; index < strarr.length - k + 1; index++) {
    // console.log("*", strarr[index]);
    let tmpMax = 0;
    let tmpRes = "";

    for (let j = 0; j < k; j++) {
      if (index + j < strarr.length) {
        tmpMax += strarr[index + j].length;
        tmpRes += strarr[index + j];
      }

      // console.log(`**tmpMax ${tmpMax}, tmpRes ${tmpRes} `);
    }

    if (tmpMax > maxLength) {
      res = tmpRes;
      maxLength = tmpMax;
      console.log(
        `*** maxLength ${maxLength} tmpMax ${tmpMax} tmpres ${tmpRes}`
      );
    }
  }
  return res;
}

console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  ),
  "oocccffuucccjjjkkkjyyyeehh"
);
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
  "abigailtheta"
);
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3),
  "ixoyx3452zzzzzzzzzzzz"
);
