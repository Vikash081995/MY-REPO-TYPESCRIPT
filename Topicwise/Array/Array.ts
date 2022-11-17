 let threePigs: number[] = [1, 2, 3];
let genericStringArray: Array<string> = ['first', '2nd', '3rd'];

var courses: any = ["Angular", "React", "ES6", "JMS"];

courses.push("nextjs");
courses.push(10);

// =============example 2==========
let array: number[] = [1, 2, 3];

// Usage
array = [1];
array = [1, 2, 3, 4, 5];
array = ["hello"]; //error
// ==================================
var boolArray: boolean[];
boolArray = [true, false];
console.log(boolArray[0]);
console.log(boolArray.length);

//====================================== Tuple===========================
let tuple: [number, number] = [0, 0];
// usage
tuple = [1, 1];
tuple = [1, 2];
