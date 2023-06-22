console.log(` - * Persistent Bugger * -`);

function persistence(num: number = 0): number {
    let result = 0;
    let tmpStr = num.toString();

    while (tmpStr.length != 1) {
        let tmp = 1;

        for (let index = 0; index < tmpStr.length; index++) {
            tmp = tmp * Number(tmpStr[index]);
        }

        result++;
        tmpStr = tmp.toString();
    }

    return result;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
