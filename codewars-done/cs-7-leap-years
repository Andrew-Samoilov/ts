console.log(` - * 7 kuy * Leap Years * -`);

function isLeap(year: number): boolean {
    let res = false;

    // console.log(year, res);
    if (year % 4 === 0) {
        res = true;
    }

    if (year % 100 === 0) {
        res = false;
    }

    if (year % 400 === 0) {
        res = true;
    }

    return res;
}

console.log(isLeap(2020), true);
console.log(isLeap(2000), true);
console.log(isLeap(2015), false);
console.log(isLeap(2100), false);
