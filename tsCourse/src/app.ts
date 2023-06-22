console.log(` - * String ends with? * -`);

function solution(str: string, ending: string): boolean {
    let result = false;
    console.log(str, ending);
    console.log(str.slice(-ending.length));
    
    if (ending === "") {
        return true;
    }
    
    if (str.slice(-ending.length) === ending) {
        result = true;
    }
    
    return result;

}

console.log(solution("abcde", "cde"), true);
console.log(solution("abcde", "abc"), false);
console.log(solution("abc", ""), true);
