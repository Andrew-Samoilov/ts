console.log(` - *   * -`);

function trim(str: string, size: number): string {
  console.log(str, str.length, size);
  let res = str;

  if (str.length > size||str.length>=3) {
    res = str.slice(0, size - 3) + "...";
    // console.log("*", str.slice(0, size - 3));
  }
  return res;
}

console.log(trim("Creating kata is fun", 14), "Creating ka...");
console.log(trim("He", 1), "H...");
console.log(trim("Sw", 2), "Sw");
console.log(trim("iFd", 3), "iFd");
console.log(trim("iF", 3), "iF");
