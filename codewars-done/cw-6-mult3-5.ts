console.log(` - * Multiples of 3 or 5 * -`);

function solution(number: number): number {
  let res = 0;

  for (let index = 0; index < number; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      res += index;
    }
  }

  return res;
}

console.log(solution(10), 23);
