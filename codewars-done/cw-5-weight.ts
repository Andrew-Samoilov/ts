console.log(` - * Weight for weight * -`);

function orderWeight(strng: string): string {
  let tmpStrArr = strng.split(" ");

  function NumberWeight(n: string): number {
    let tmp = n.toString();
    let res = 0;
    for (let index = 0; index < tmp.length; index++) {
      res += Number(tmp[index]);
    }
    // console.log(`res ${res}`);
    return res;
  }

  function WeightSort(n1: string, n2: string): number {
    return NumberWeight(n1) === NumberWeight(n2)
      ? n1.localeCompare(n2)
      : NumberWeight(n1) - NumberWeight(n2);

    // if (NumberWeight(n1) === NumberWeight(n2)) {
    //     // console.log(n1.localeCompare(n2));
    //     return n1.localeCompare(n2);
    // }
    // return NumberWeight(n1) - NumberWeight(n2);
  }

  return tmpStrArr.sort(WeightSort).join(" ");
}

// console.log(orderWeight("103 123 4444 99 2000"), "; 2000 103 123 4444 99");
console.log(
  orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"),
  "; 11 11 2000 10003 22 123 1234000 44444444 9999"
);
