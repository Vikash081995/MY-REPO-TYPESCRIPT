const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 }
];
function findCherries(fruit:any) {
  return fruit.name === "cherries";
}
inventory.find(findCherries);

