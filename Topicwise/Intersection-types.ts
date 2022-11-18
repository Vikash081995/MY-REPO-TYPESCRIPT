interface IA {
  a: number;
}

interface IB {
  b: number;
}
interface IC {
  c: number;
}

function X(obj: IA & IB & IC) {
  return obj.a + obj.b + obj.c;
}
// =====================
function combine<ObjA extends object, ObjB extends object>(
  objA: ObjA,
  objB: ObjB
): ObjA & ObjB {
  return { ...objA, ...objB };
}

const objA = { a: 1 };
const objB = { b: 1 };
const resultObj = combine(objA, objB);
// ============================
type Poin2D = {
  x: number;
  y: number;
};

type Poin3D = Poin2D & {
  z: number;
};
// ====================================

type _Person = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: string;
};
type ContactDetails = _Person & Email & Phone;

function contact1(details: ContactDetails) {
  console.log(`Dear ${details.name} your email is ${details.email}
    and phone number is ${details.phone}`);
}
// =========================================================================
// A Intersection Type combines the member of two or more types.
// =========================================================================

interface Knife {
  cut(): void;
}
interface BottleOpener {
  openBottle(): void;
}
interface Screwdriver {
  turnScrew(): void;
}
type SwissArmyKnife = Knife & BottleOpener & Screwdriver;
function use(tool: SwissArmyKnife) {
  console.log("I can do anything!");
  tool.cut();
  tool.openBottle();
  tool.turnScrew();
}
// ==============================================================================
type Admin = {
  name: string;
  privileges: string[];
};

type Employee90 = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee90;

const e13: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function adding(a: number, b: number): number;
function adding(a: string, b: string): string;
function adding(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
// ===================================
// typeGaurds
// =================

type UnknownEmployee = Employee90 | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name" + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges" + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Privileges" + emp.startDate);
  }
}
printEmployeeInformation(e13);
