type Dictionary = {
  [key: string]: boolean;
};
// ==============

type Person90 = {
  displayName: string;
  email: string;
};

type PersonDictionary = {
  [username: string]: Person90;
};

const persons: PersonDictionary = {
  jane: {
    displayName: "Jane Doe",
    email: "jane@example.com"
  }
};
// ========================================
// An Object in Js can be accessed with a string to hold a reference to any other js object

let fooker1: any = {};
fooker1["Hello"] = "Worlds";
console.log(fooker1["Hello"]); // worlds
// =============================================
// using limited set of string literals

type Index = "a" | "b" | "c";
type FromIndex = { [k in Index]?: number };
const good: FromIndex = {
  b: 1,
  c: 2
};
const bad: FromIndex = {
  b: 1,
  c: 2,
  d: 3
};
// ======================================================
// having both string and number indexers
// ===============================================
interface ArrStr {
  [key: string]: string | number;
  [index: number]: string;
  length: number;
}
