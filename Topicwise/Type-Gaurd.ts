// ========================================
// typeGaurd
// ========================================

class Car {
  drive() {
    console.log("Driving.....");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo...." + amount);
  }
}

type Vechile = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVechile(vechile: Vechile) {
  vechile.drive();
  if (vechile instanceof Truck) {
    vechile.loadCargo(1000);
  }
}

useVechile(v1);
useVechile(v2);
// ================================
//  Example with interfaces
// ===============================
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type _Animal = Bird | Horse;

function moveAnimal(animal: _Animal) {
  let speed;
  //   if ("flyingSpeed" in animal) {
  //     console.log("Moving with speed" + animal.flyingSpeed);
  //   }

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed:" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// =============================
// IN OPERATOR FOR TYPE GAURDS CHECKING
// ===============================
interface A {
  x: number;
}
interface B {
  y: string;
}

function doStuff(q: A | B) {
  if ("x" in q) {
  } else {
  }
}
// ================================
// literal type Gaurd
// ================================
type Fooka = {
  kind: "foo";
  foo: number;
};
type Bara = {
  kind: "bar";
  bar: number;
};

function doStuff23(arg: Fooka | Bara) {
  if (arg.kind === "foo") {
    console.log(arg.foo);
  } else {
    console.log(arg.bar);
  }
}
