console.log(` - * Trimming a string * -`);

function trim(str: string, size: number): string {
  console.log(str, str.length, size);
  let res = str;

  if (size > 3) {
    if (str.length > size) {
      res = str.slice(0, size - 3) + "...";
      // console.log("*", str.slice(0, size - 3));
    }
  } else if (str.length === size || str.length < size) {
    res = str;
  } else {
    res = str.slice(0, size) + "...";
  }

  return res;
}

console.log("Code Wars is pretty rad", 50, "Code Wars is pretty rad");
console.log(trim("Creating kata is fun", 14), "Creating ka...");
console.log(trim("He", 1), "H...");
console.log(trim("qweRTY", 2), "qw");

console.log(trim("Sw", 2), "Sw");
console.log(trim("iFd", 3), "iFd");
console.log(trim("iF", 3), "iF");
