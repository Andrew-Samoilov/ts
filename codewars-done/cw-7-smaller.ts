console.log(` - * 7 kuy * How many are smaller than me? * `);

function smaller(nums: number[]): number[] {
    let res = [];
    for (let index = 0; index < nums.length; index++) {
        let counter = 0;
        for (let index2 = index + 1; index2 < nums.length; index2++) {
            if (nums[index] > nums[index2]) counter++;
        }
        res.push(counter);
    }
    return res;
}


console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);