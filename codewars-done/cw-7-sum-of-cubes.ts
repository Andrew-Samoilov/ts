console.log(` - * Sum of Cubes * -`);

function sumCubes(n: number): number {
  let res = 0;

  for (let index = 0; index <= n; index++) {
    // res += Math.pow(index, 3);
    res += index * index * index;
    // console.log(`Math.pow(${index}, 3), ${Math.pow(index, 3)}`);
  }

  return res;
}

console.log(sumCubes(1), 1);
console.log(sumCubes(2), 9);
console.log(sumCubes(3), 36);
console.log(sumCubes(4), 100);
console.log(sumCubes(10), 3025);
console.log(sumCubes(123), 58155876);
