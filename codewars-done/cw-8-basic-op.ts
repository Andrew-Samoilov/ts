console.log(` - * TBasic Mathematical Operations * -`);

function basicOp(operation: string, value1: number, value2: number): number {
    let res = 0;
    switch (operation) {
        case '+':
            res = value1 + value2;
            break;
        case '-':
            res = value1 - value2;
            break;
        case '*':
            res = value1 * value2;
            break;
        case '/':
            res = value1 / value2;
            break;
        default:
            res = -1;
            break;
    }
    return res;
}
