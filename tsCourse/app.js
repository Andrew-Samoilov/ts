var age;
age = 50;
var name = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) { return number; };
callback = function (a) { return 100 + a; };
var anything;
anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var str;
var person;
person = ['Max', 21];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
var page = {
    load: Load.READY
};
if (page.load === Load.LOADING) {
    console.log('Сторінка завантажується');
}
if (page.load === Load.READY) {
    console.log('Сторінка завантажена');
}
var union;
var literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
