const centuryFromYear = (year: number): number => year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
// if (year%100===0) {
//     return year / 100;
// } else {
//     return Math.floor((year / 100)) + 1;
// }

console.log(centuryFromYear(1705), 18);
console.log(centuryFromYear(1900), 19);
console.log(centuryFromYear(1601), 17);
console.log(centuryFromYear(2000), 20);
console.log(centuryFromYear(5), 1);
