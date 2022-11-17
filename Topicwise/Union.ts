let pid: string | number = 22;
pid: "22";

// ==========================
function someFn(myArgument: number | string | boolean) {
  if (typeof myArgument === "string") {
    let x = myArgument.toUpperCase();
  } else if (typeof myArgument === "number") {
    myArgument.toFixed();
  } else {
    myArgument;
  }
}
// ======================================
interface Dog {
  bark(): void;
  walk(): void;
}
interface Cat {
  meow(): void;
  walk(): void;
}

function callMyPet(pet: Dog | Cat) {
  pet.walk();
  if ((<Dog>pet).bark) {
    (<Dog>pet).bark();
  } else {
    (<Cat>pet).meow();
  }
}
// =============================
class Foo {
    foo:number | undefined;
    commonProp:string | undefined;
}

class Bar {
    bar:number | undefined;
    commonProp:string | undefined;
}

function fooBarFunction(obj:Foo|Bar) {
    if(obj instanceof Foo) {
        obj.foo;
    }else{
        obj.bar
    }
    
}