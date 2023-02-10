console.log(` - * Roman Numerals Decoder * -`);

function solution(roman: string): number {
  let res = 0;
  for (let index = 0; index < roman.length; index++) {
    switch (roman[index]) {
      case "I":
        switch (roman[index + 1]) {
          case "V":
            {
              res += 4;
              index++;
            }
            break;
          case "X":
            {
              res += 9;
              index++;
            }
            break;
          default:
            res++;
            break;
        }
        break;
      case "V":
        res += 5;
        break;
      case "X":
        switch (roman[index + 1]) {
          case "L":
            {
              res += 40;
              index++;
            }
            break;
          case "C":
            {
              res += 90;
              index++;
            }
            break;
          default:
            res += 10;
            break;
        }
        break;
      case "L":
        res += 50;
        break;
      case "C":
        switch (roman[index + 1]) {
          case "D":
            {
              res += 400;
              index++;
            }
            break;
          case "M":
            {
              res += 900;
              index++;
            }
            break;
          default:
            res += 100;
            break;
        }
        break;
      case "D":
        res += 500;
        break;
      case "M":
        res += 1000;
        break;
      default:
        break;
    }
  }
  console.log(roman, res);
  return res;
}

console.log(solution("XXI"), 21);
console.log(solution("I"), 1);
console.log(solution("IV"), 4);
console.log(solution("MMVIII"), 2008);
console.log(solution("MMCCXLIII"), 2243);
