console.log(` - * Calculate average * -`);

function findAverage(array: number[]): number {
  let result = 0;
  if (array.length > 0) {
    for (let index = 0; index < array.length; index++) {
      result += array[index];
    }
    result = result / array.length;
  }
  return result;
}

console.log(findAverage([1, 1, 1]), 1);
