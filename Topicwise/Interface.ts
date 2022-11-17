// ===================================================
interface UserInterface {
  readonly id: number;
  name: string;
  age: number;
}

const user1: UserInterface = {
  id: 1,
  name: "john",
  age: 8
};

// ================interface with class===============
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person1 implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register(): string {
    return `${this.name} is now registered `;
  }
}
const brand = new Person1(1, "Brad Traversery");
const mike = new Person1(2, "mike tyson");

class Employee98 extends Person1 {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee98(1, "shawn", "developer");
console.log(emp.name);
// =====================================================
interface Product34 {
  id: number;
  name: string;
  description: string;
  price: number;
  display(): void;
}
var product1: Product34 = {
  id: 123,
  name: "Iphone",
  description: "its awesome",
  price: 1000,
  display(): void {
    console.log(this.id + "" + this.name);
  }
};

// =======================
interface Add {
  (x: number, y: number): void;
}

interface Sub {
  (x: number, y: number): number;
}

var add: Add;
var sub: Sub;

add = function (x: number, y: number): void {
  console.log(x + y);
};

sub = function (a: number, b: number): number {
  return a - b;
};
// =============================
// extending interfaces
// ==============================

interface Parent {
  x: string;
}

interface Parent2 {
  y: string;
}

interface Parent3 {
  z: string;
}

interface Child extends Parent, Parent2, Parent3 {}

let child: Child = {
  x: "someType",
  y: "y props ",
  z: "Z Props"
};
// ===============================================
