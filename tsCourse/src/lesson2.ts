// lesson2
export {}; // for remove cannot redeclarate error
let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: any = undefined;
let callback = (a: number) => {
  return 100 + a;
};

let anything: any = -20;
anything = "Text";
anything = {};

let some: string;
some = "Text";

let str: string;

str = some;

let fixed: [string, number] = ["Max", 21];

enum Status {
  READY,
  LOADING,
}

function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError(): void {
  throw new Error("Error");
}

type Pages = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: Pages = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: Pages = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
