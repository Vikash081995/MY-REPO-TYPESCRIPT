// Function return types

// ----------> here the function return type is inferred as number
function add23(a: number, b: number) {
  return a + b;
}

// ->solution

type Adder = (a: number, b: number) => number;
let foo34: Adder = (a, b) => a + b;
// ------------------------------------------------

