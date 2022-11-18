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
console.log(user1.id);

// ================interface with class===============
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person1 implements PersonInterface {
  constructor(public id: number, public name: string) {}
  register(): string {
    return `${this.name} is now registered `;
  }
}
const brand = new Person1(1, "Brad Traversery");
const mike = new Person1(2, "mike tyson");
console.log(brand.register());
console.log(mike.register());

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
console.log(product1.id);

// ======================================================
interface Add {
  (x: number, y: number): void;
}

interface Sub {
  (x: number, y: number): number;
}

var __add: Add;
var __sub: Sub;

__add = function (x: number, y: number): void {
  console.log(x + y);
};

__sub = function (a: number, b: number): number {
  return a - b;
};
// ==================================================
// extending interfaces
// ==================================================

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
console.log(child.x);
console.log(child.y);
console.log(child.z);
// ===============================================
// Using  Interface  for Polymorphism
// ===============================================
interface Connector {
  deConnect(): boolean;
}

export class WifiConnector implements Connector {
  public doConnect(): boolean {
    console.log("connecting via wifi");
    console.log("Get Password");
    console.log("Lease an IP for 24 hours ");
    return true;
  }
}

export class System {
  constructor(private connector: Connector) {
    connector.deConnect();
  }
}

export class BlueToothConnector implements Connector {
  public deConnect(): boolean {
    console.log("Connecting via bluetooth");
    console.log("Pair via Pin");
    return true;
  }
}
// ===================================================================
// Generic Interfaces
// ===================================================================
interface IStatus<U> {
  code: U;
}
interface IEvents<T> {
  list: T[];
  emit(event: T): void;
  getAll(): T[];
}

class State<T> implements IEvents<T> {
  list: T[];
  constructor() {
    this.list = [];
  }
  emit(event: T): void {
    this.list.push(event);
  }
  getAll(): T[] {
    return this.list;
  }
}

const s = new State<IStatus<number>>();
s.emit({ code: 200 });
s.getAll().forEach((event) => console.log(event.code));

// ===========================================================
// Declaring a generic interface 
// ===========================================================
interface IResult<T> {
  wasSuccessfull: boolean;
  error: T;
}

var result :IResult<string>=.........
var error:string= result.error;

// Generic interface with multiple type parameters
interface IRunnable<T,U>{
  run(input:T): U;
}
var runnable :IRunnable<string,number>=...
var input:string;
var result :number = runnable.run(input);
// =============================================================
// Implementing a generic interface
// =============================================================
interface IResult<T>{
  wasSuccessfull:boolean;
  error:T;
  clone():IResult<T>;
}
// ->implementing with generic class
 class Result<T> implements IResult<T>{
  constructor(public result:boolean, public error:T){
  }
  public clone():IResult<T> {
    return new Result<T>(this.result, this.error);
  }
 }
//  -> implementing with non generic class

class StringResult implements IResult<string> {
  constructor(public result:boolean, public error:string){}
  public clone():IResult<string> {
    return new StringResult(this.result, this.error);
  }
}