console.log(` - * Weight for weight * -`);
function orderWeight(strng: string): string {
    let tmpStrArr = [strng] = strng.split(' ');
    let tmpNumArr = [Number];
    tmpNumArr.map(i => Number(i));
    
    tmpNumArr.sort();
    
    function NumberWeight(s:string): number {
        let res = 0;
        for (let index = 0; index < s.length; index++) {
            res+=Number(s[index]);
        }
        return res;
    }

    // for (let index = 0; index < strng.length; index++) {

    //     console.log(
    //       `strng[${index}] ${strng[index]} NumberWeight ${NumberWeight(
    //         strng[index]
    //       )}`
    //     );
    // }
    tmpArr.sort();

    return tmpArr.join(' ');

}

console.log(orderWeight("103 123 4444 99 2000"), "; 2000 103 123 4444 99");
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999");

