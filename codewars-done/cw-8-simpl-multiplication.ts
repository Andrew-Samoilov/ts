console.log(` - * 8 kuy * Simple multiplication * -`);

const simpleMultiplication = (num: number): number => (num % 2 === 0) ? num * 8 : num * 9;

console.log(simpleMultiplication(2), 16, 'Should return double given argument..')
console.log(simpleMultiplication(1), 9, 'Should return double given argument..')
console.log(simpleMultiplication(8), 64, 'Should return given argument times eight...')
console.log(simpleMultiplication(4), 32, 'Should return given argument times eight...')
console.log(simpleMultiplication(5), 45, 'Should return given argument times nine...')
