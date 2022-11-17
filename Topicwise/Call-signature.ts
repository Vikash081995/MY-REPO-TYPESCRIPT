// example1

type _Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  debugName?: string;
};

const _add: _Add = (a: number, b: number, c?: number) => {
  return a + b + (c != null ? c : 0);
};

_add.debugName = "Addition Function";

// ==========================================
//example 2

type PointCreator = new (x: number, y: number) => { x: number; y: number };

const Point4: PointCreator = class {
  constructor(public x: number, public y: number) {}
};
// =======================================
// callable
// =======================================
interface Overloaded {
  (foo: string): string;
  (foo: number): number;
}

function stringOrNumber(foo: number): number;
function stringOrNumber(foo: string): string;
function stringOrNumber(foo: any): any {
  if (typeof foo === "number") {
    return foo * foo;
  } else if (typeof foo === "string") {
    return `hello ${foo}`;
  }
}

const overloaded: Overloaded = stringOrNumber;
const str = overloaded("");
const num = overloaded(123);
// =======================
// type annotation for a variable

const overloaded1: {
  (foo: string): string;
  (foo: number): number;
} = (foo: any) => foo;

//arrow syntax
const simple: (foo: number) => string = (foo) => foo.toString();