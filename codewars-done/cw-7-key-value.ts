console.log(` - * Get key/value pairs as arrays * -`);

function keysAndValues(data: object) {
  console.log(data);
  // console.log(Object.keys(data));
  // console.log(Object.values(data));
  return [Object.keys(data), Object.values(data)];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }), [
  ["a", "b", "c"],
  [1, 2, 3],
]);
console.log(keysAndValues({}), [[], []]);
console.log(keysAndValues({ 1: "a", 2: "b", 3: "c" }), [
  ["1", "2", "3"],
  ["a", "b", "c"],
]);
