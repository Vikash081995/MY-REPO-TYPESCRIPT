class Cat {
  meow() {
    console.log("meow");
  }
}
class Dog {
  bark() {
    console.log("woof");
  }
}

type Animal = Cat | Dog;

function speak(animal: Animal) {
  if (animal instanceof Cat) {
    animal;
  }
  if (animal instanceof Dog) {
    animal.bark();
  }
}
// ==========================================