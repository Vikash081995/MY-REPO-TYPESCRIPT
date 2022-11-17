type Person12 = {
  name: string;
  age: number;
};

let person12: Person12 = {
  name: "arvind",
  age: 23
};
// ==========================

type StrOrNum = string | number;

var sample: StrOrNum;
sample = 123;
sample = "123";

// ==============================
type Text1 = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;
