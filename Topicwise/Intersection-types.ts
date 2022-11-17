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