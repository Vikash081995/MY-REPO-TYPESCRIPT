// structural typing:- names don't matter as long as structures match

type User34 = { id: string };
type Product23 = { id: string };

let user2: User34 = { id: "user-asfef23" };
let product23: Product23 = { id: "Product-fwefw575" };

user2 = product23;
product23 = user2;
// ----------------------------

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 0, y: 0 };
let point3D: Point3D = { x: 0, y: 10, z: 20 };

// ** Extra info ok*
point2D = point3D;

function takesPoint2D(point: Point2D) {
  /** */
}
takesPoint2D(point3D);

// Error:missing info/
point3D = point2D;
function takesPoint3D(point: Point3D) {
  /*  */
}
takesPoint3D(point2D);
// ------------------------------------------------------
function logIfHasName(something: { name?: string }) {
  if (something.name) {
    console.log(something.name);
  }
}

var personwed = { name: "matt", job: "being awesome" };
var animal = { name: "cow", diet: "vegan " };
logIfHasName(personwed);
logIfHasName(animal);
// ============================================================
