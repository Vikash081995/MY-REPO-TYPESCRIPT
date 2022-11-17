let cid: any = 1;
let customerId = <number>cid;
let customerId1 = cid as Number;
// ===============================
let empCode: any = 111;
let employeeCode = <number>empCode;
let emp1Code: any = 111;
let employeeCoder = emp1Code as number;
// ==========================
interface Student {
  namer: string;
  code: number;
}
let student12 = <Student>{};
student12.name = "Rohit";
student12.code = 123;
// ===================================
interface Foo {
  bar: number;
  bas: string;
}

var foo = {} as Foo;
foo.bar = 123;
foo.bas = "hello";
// =====================

