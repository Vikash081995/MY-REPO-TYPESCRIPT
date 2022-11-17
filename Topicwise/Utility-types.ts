// Partial- changes all the properties in an object to be optional

interface Point {
  x: number;
  y: number;
}
let pointPart: Partial<Point> = {};
pointPart.x = 10;

// Required - changes all the properties in an object to be required

interface Car1 {
  make: string;
  model: string;
  mileage?: number;
}

let myC: Required<Car1> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000
};
// Record - to defining an object type with a specific key type and value
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25
};

// Pick - removes all but the specified keys from an object type

interface Person {
  name: string;
  age: number;
  location?: string;
}

const Bob: Pick<Person, "name"> = {
  name: "Bob"
};

