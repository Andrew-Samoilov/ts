console.log(` - * 8 kuy * Will you make it? * -`);

const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean =>
    ((distance / mpg) <= fuelLeft);

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
