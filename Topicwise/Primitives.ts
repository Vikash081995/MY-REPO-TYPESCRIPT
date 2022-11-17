let id = 5;

let id1: number = 5;
let company: string = `traversery media `;
let isPublished: boolean = true;
let _x: any = "hello";

let ids: number[] = [1, 3, 4, 5, 6, 7, 8];
let arr: any[] = [1, "true", "false"];
// ======================more example ============
let message: string = "Hello World";
console.log(message);

// primitive types
let isPresent = false;
let magic = 66.6;
let _hello: string = "world";

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol("star");

// instance Types
let regexp: RegExp = new RegExp("ab+c");
let _array: Array<number> = [1, 2, 3, 4, 5];
let set: Set<number> = new Set([1, 2, 3]);

// ** A first in first our collection*/
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue();
