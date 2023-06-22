console.log(` - +* Sum of Intervals * -`);

function sumOfIntervals(intervals: [number, number][]) {
    let res = 0;

    function compare(a: [number, number], b: [number, number]) {
        return a[0] - b[0];
    }
    intervals.sort(compare);

    for (let index = 0; index < intervals.length; index++) {
        res += intervals[index][1] - intervals[index][0];
        console.log(
            `+ res ${res},  ${intervals[index]}, ${intervals[index][1] - intervals[index][0]}`
        );
    }
    console.log(`++++ res ${res}`);

    for (let index = 0; index < intervals.length; index++) {
        let x1 = intervals[index][0];
        let x2 = intervals[index + 1][0];
        let y1 = intervals[index][1];
        let y2 = intervals[index + 1][1];
        console.log(`1 intervals[${index}] ${intervals[index]}`);
        if (intervals[index + 1]) {
            console.log(`12 intervals[${index}] ${intervals[index]}`);
            if (y1 > x2) {
                console.log(`123 intervals[${index}] ${intervals[index]}`);
                if (y1 <= y2) {
                    res -= y1 - x2;
                    console.log(`-  |${y1} - ${x2} = ${y1 - x2}`);
                } else {
                    res -= y2 - x2;
                    console.log(`-- |${y2} - ${x2} = ${y2 - x2}`);
                }
            }
        }
    }


    console.log(" intervals ", intervals);
    return res;
}

// console.log(sumOfIntervals([[1, 5]]), 4);
// console.log(sumOfIntervals([[1, 5], [6, 10],]), 8 );
// console.log(sumOfIntervals([[1, 5],[1, 5],]),4);
// console.log(sumOfIntervals([[1, 4],[7, 10],[3, 5],]),7);
// console.log(sumOfIntervals([[1, 10], [4, 7],]), 9 );
// console.log(sumOfIntervals([[-1e9, 1e9]]), 2e9);
// console.log(sumOfIntervals([[0, 20], [-1e8, 10], [30, 40],]), 1e8 + 30);

// console.log(
//   sumOfIntervals([
//     [-358, 471],
//     [-329, -192],
//     [-321, -197],
//     [-276, -12],
//     [-275, -261],
//     [-263, -64],
//     [-209, 11],
//     [0, 413],
//     [21, 260],
//     [132, 260],
//     [145, 455],
//     [159, 257],
//     [264, 493],
//     [295, 359],
//   ]),
//   851
// );

console.log(
    sumOfIntervals([
        [-459, -392],
        [-196, 472],
        [-60, 282],
        [-2, 174],
        [22, 223],
        [358, 419],
    ]), 735
);