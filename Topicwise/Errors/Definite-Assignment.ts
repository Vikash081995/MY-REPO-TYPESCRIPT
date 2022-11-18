// has no initializer and is not definitely assigned in the constructor
class C {
  foo90: number;
  bar: string = "hello";
  baz1: boolean;
  constructor() {
    this.foo90 = 1;
  }
}
// ------------------solution------------------
// class C {
//     foo90!: number;
//     bar: string = "hello";
//     baz1!: boolean;
//     constructor() {
//       this.foo90 = 1;
//     }
// }

//ERROR: variable used before assignment
let a:number[];
let b!:number[];

initialize();
a.push(4); //ERROR: variable used before assignment
b.push(4);

function initialize(){
    a=[0,1,2,3,4];
    b=[0,1,2,3,4];
}