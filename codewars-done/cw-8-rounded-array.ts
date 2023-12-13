console.log(` - * 8 kuy * Get the mean of an array * -`);

function getAverage(marks: number[]): number {
    let res = 0;

    for (let index = 0; index < marks.length; index++) {
        res += marks[index];
    }

    console.log(res, marks.length);
    return Math.floor(res / (marks.length));
}

console.log(getAverage([1, 5, 87, 45, 8, 8]), 25);
console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([8, 11, 4, 8, 8, 19, 19, 8, 8, 10, 2, 4, 3, 7, 19, 3, 16, 14]), 10);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
