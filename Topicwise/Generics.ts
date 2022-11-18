function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 5]);
let strArray = getArray<string>(["brad", "john", "jill"]);
strArray.push("Hello");

// =========================
function insertAtBeginning<T>(array: T[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// =========================
// Generic constraints
// ===============

type NameFields = { firstName: string; lastName: string };

function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  };
}

const john12 = addFullName({
  email: "john@example.com",
  firstName: "john",
  lastName: "Doe"
});

console.log(john12.email);
console.log(john12.fullName);

// ==================================
class List23<T> {
  add(val: T) {}
}

class Animal23 {
  name: string;
}

class Cat extends Animal23 {
  meow() {}
}

const animals = new List<Animal>();
// ====================================
// Type Parameters as constraints
// ====================================
function assign<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = source[id];
  }
  return target;
}
let xr = { a: 1, b: 2, c: 3, d: 4 };
assign(xr, { b: 10, d: 20 });
// ====================================
// generic constraints
// ====================================

interface IRunnabler {
  run(): void;
}
interface IRunner<T extends IRunnabler> {
  runSafe(runnable: T): void;
}
// ====================================
// generic functions
// ===================================
function runSafe<T extends IRunnabler>(runnable: T): void {
  try {
    runnable.run();
  } catch (e) {}
}
