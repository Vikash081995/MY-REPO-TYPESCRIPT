// String literal types allow you to specify the exact value a string can have.

let myfav: "dog";
myfav = "dog";

// Any other string will give a error.
// Error: Type '"rock"' is not assignable to type '"dog"'.
// myfav = "rock";
// ----------------------------------------------------------------------------
// =====variable Assignment ===========

type Pet = "cat" | "dog" | "Rabbit";

let pet: Pet;
if ((pet = "cat")) {
  console.log("Correct");
}
if ((pet = "Deer")) {
  console.log("Complilation error");
}
// ==============Function Parameters=============
type FruitsName = "Apple" | "Mango" | "Orange";
function showFruitName(fruitsName: FruitsName): void {
  console.log(fruitsName);
}
showFruitName('Mango');
// -----------------------------------------------


