class Animal89 {
  public readonly name: String;
  constructor(name: string) {
    this.name = name;
  }
}

const sheep = new Animal89("sheep");
console.log(sheep.name); //Allow
sheep.name = "wolf"; //not allow
// ====================================================

type Fooker = {
  readonly bar: number;
  readonly bas: number;
};
let fooker: Fooker = { bar: 21, bas: 334 }; //initialization is ok

fooker.bar = 456; //Mutation is not ok
// =====================================================

type Fooler = {
  bar: number;
  bas: number;
};

type FooReadOnly = Readonly<Fooler>;

let fooler: Fooler = { bar: 123, bas: 345 };
let fooReadonly: FooReadOnly = { bar: 234, bas: 7575 };
fooler.bar = 6767;
fooReadOnly.bar = 979;

// ======================================================
// mark index signature as readonly also
// ======================================================

interface Foop {
  readonly [x: number]: number;
}

let foop: Foop = { 0: 123, 2: 345 };
console.log(foop[0]);

// ======================================================
// Automatic inference
// ======================================================

class IPerson {
  firstName: string = "John";
  lastName: string = "Doe";
  get fullName() {
    return this.firstName + this.lastName;
  }
}

const iperson = new IPerson();
console.log(iperson.fullName);
iperson.fullName = "Dear Reader";

// ===============================