console.log(` - * 8 kuy * Short Long Short * `);

function shortLongShort(a: string, b: string) {
    // let res = '';
    // if (a.length > b.length) {
    //     res = b + a + b 
    // } else {
    //     res = a + b + a; 
    // }
    // return res;
    
    return a.length > b.length ? b + a + b : a + b + a;
}

console.log(shortLongShort('45', '1'), '1451');
console.log(shortLongShort('13', '200'), '1320013');
console.log(shortLongShort('Soon', 'Me'), 'MeSoonMe');
console.log(shortLongShort('U', 'False'), 'UFalseU');
