// const is for a variable reference
// the variable cannot be assigned to anything else
// Readonly is for a Property
// Readonly properties can be modified because of aliasing
// -------------------------------------------------------------

const foo1 = 123;
var bar1: {
  readonly bar: number;
};

// ----------------------------------

let foo2: {
  readonly bar: number;
} = {
  bar: 123
};

function iMutaterFoor(foo: { bar: number }) {
  foo.bar = 456;
}

iMutaterFoor(foo2);
console.log(foo2.bar);
// -------------------------------------------