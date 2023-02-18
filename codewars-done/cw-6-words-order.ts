console.log(` - * Your order, please * -`);

function order(words: string): string {
  let res = [""];
  let tmp = words.split(" ");

  for (let index = 0; index < tmp.length; index++) {
    // console.log(tmp[index]);

    for (let j = 0; j < tmp[index].length; j++) {
      // console.log(Number(tmp[index][j]));
      if (Number(tmp[index][j])) {
        res[Number(tmp[index][j]) - 1] = tmp[index];
      }
    }
  }

  return res.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(
    order("4of Fo1r pe6ople g3ood th5e the2"),
          "Fo1r the2 g3ood 4of th5e pe6ople"
);
console.log(order(""), "");
