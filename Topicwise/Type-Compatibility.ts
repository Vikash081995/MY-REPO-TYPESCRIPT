// string and number are not compatible

let str1: string = "hello";
let nm: number = 123;

str1 = num; // Error
nm = str; //Error

// ------------------------------------------------------
interface Point2Dr {
  x: number;
  y: number;
}
interface Point3Dr {
  x: number;
  y: number;
  z: number;
}

let iMakePoint2D = (): Point2Dr => ({ x: 0, y: 0 });
let iMakePoint3D = (): Point3Dr => ({ x: 0, y: 0, z: 0 });

iMakePoint2D = iMakePoint3D;
iMakePoint3D = iMakePoint2D;
// -------------------------------------------------------------------

class Animala {
  feet: number | undefined;
  constructor(name: string, numfeet: number) {}
}
class Sizer {
  feet: number | undefined;
  constructor(meters: number) {}
}

let ar: Animala;
let sr: Sizer;

ar = sr;
sr = ar;
// ========================================================================
class Animaler {
  constructor(public name: string) {}
}

class Caterpillar extends Animaler {
  meow() {}
}

var animaler = new Animaler('animal');
var caterpillar = new Caterpillar('cat');

animaler= caterpillar;
caterpillar= animaler
// ==========================================================================