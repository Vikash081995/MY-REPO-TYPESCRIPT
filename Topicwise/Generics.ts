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
// class List23<T> {
//   add(val: T) {}
// }

// class Animal23 {
//   name: string;
// }

// class Cat56 extends Animal23 {
//   meow() {}
// }

// const animals = new Lister<Animal>();
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
// ================================================
// const names: Array<string | number> = ["Max", "Manuel"];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data =>{
//     data.split('');
// })
// =====================

// function merge<T, U>(objA: T, objB: U){
//   return Object.assign(objA, objB);
// }

// const mergedObj =merge<{name:string,hobbies:string[]},{age:number}>({name:'Max',hobbies:['sports']},{age:30});
// mergedObj.age;
// ==================
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["sports"] }, { age: 30 });
mergedObj.age;
// ===================
interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length > 0) {
    descriptionText = "Got " + element.length + "elements";
  } else if (element.length > 1) {
    descriptionText = "Got" + element.length + "elements";
  }
  return [element, descriptionText];
}
console.log(countAndPrint(["sports", "Cooking"]));
// ===============================
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value" + obj[key];
}
console.log(extractAndConvert({ name: "Max" }, "name"));
// =====================
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
// ===============================
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
// ===========================
const names: Readonly<string[]> = ["Max", "Sports"];
// names.push("Manu");
