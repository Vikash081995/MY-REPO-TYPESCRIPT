// When you create a function in TypeScript you can specify the data type of the function's arguments and the data type for the return value

function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));

//====================================================
// types in function arguments and return value void 
// ===================================================
function log23(message: string | number): void {
  console.log(message);
}
log23("Hi");

function hello(): string {
  return "Hello";
}
hello();

// ===================================================
// types in function arguments and return value string
// ===================================================
function hellow(name: string): string {
  return `Hello ${name}";
}
console.log(hellow("aman"));

// ===================================================
function display(id: number, name: string, role?: string) {
  console.log("Id", id);
}

var hello1 = function (name: string): string {
  return "Hello" + name;
};

// ===================================================
// using types to create a function
// ===================================================

type MyFunc = (a: number, b: number) => number;
const sum2: MyFunc = (a, b) => a + b;
// unknown numbers of argumentgs

function sumEverything(
  arg1: string,
  arg2: boolean,
  ...numbers: number[]
): number {
  return numbers.reduce((result, num) => result + num, 0);
}
// ======================================================
// OverLoads
// ======================================================

function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}

// =================more example================
function __add(a: number, b: number): number {
  return a + b;
}
// ---------------------------------------
function __log(message: string): void {
  console.log("LOG", message);
}
// -----------------------------------------
function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}
sum(1, 2);
sum(11, 2, 34);
// -----------------------------------------------
type __Add = (a: number, b: number) => number;
let add1: __Add;
add1 = function (a: number, b: number): number {
  return a + b;
};
// -------------------------------------------------
interface Fook {
  foo: string;
}

function fooka(sample: Fook): Fook {
  return sample;
}
// -------------default parameters----------------------
function fool(bar: number, bas: string = "hello") {
  console.log(bar, bas);
}

fool(123);
fool(123, "world");
// ============================================================
