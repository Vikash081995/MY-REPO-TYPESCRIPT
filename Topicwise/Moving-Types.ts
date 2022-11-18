// Capturing the types  and value
class Foo3 {}
var Bar2 = Foo3;

// capturing th type of variable
var fook8 = 123;
var bar5: typeof fook8;
bar5 = 456;

// Capturing the type of class Member
class Foo56 {
  foo56: number | undefined;
}

declare let _89foo: Foo56;
let bar67: typeof _89foo.foo56;

// capturing the type of magic strings

const foo78 = "hello world";
let bar78: typeof foo78;
bar78 = "hello world";

// capturing key  names
const colors = {
  red: "reddish",
  blue: "bluish"
};

type Colors = keyof typeof colors;

let color: Colors;
color = "red";
color = "blue";
