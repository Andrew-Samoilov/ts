function babichTestTask1(num: number): string {
    let str = num.toString();
    let res = '';

    for (let index = 0; index < str.length; index++) {
        res += str[index];
        for (let i = index; i < str.length - 1; i++) {
            res += '0';
        }

        ((str.length - index) > 1) ? res += ' + ' : '';

    }
    return res;
}

console.log(babichTestTask1(5861));
