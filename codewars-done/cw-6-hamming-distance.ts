console.log(` - * Hamming Distance * -`);

function hammingDistance(a: string, b: string): number {
  let res = 0;
  for (let index = 0; index < a.length; index++) {
    if (a[index] != b[index]) {
      res++;
    }
  }

  return res;
}

console.log(hammingDistance("", ""), 0);
console.log(hammingDistance("I like turtles", "I like turkeys"), 3);
console.log(hammingDistance("Hello World", "Hello World"), 0);
console.log(hammingDistance("a man a plan a canal", "a man a plan sobanal"), 3);
console.log(hammingDistance("hamming and cheese", "Hamming and Cheese"), 2);
console.log(hammingDistance("espresso", "Expresso"), 2);
console.log(
  hammingDistance("old father, old artificer", "of my soul the uncreated "),
  24
);
