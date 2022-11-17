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

class Animal23{
  name: string;
}

class Cat extends Animal23{
  meow(){

  }
}

const animals = new List <Animal>();
