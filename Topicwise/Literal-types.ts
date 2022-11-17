type Cardinaldirection = "North" | "South" | "West";

let direction: Cardinaldirection;

function move(distanceMeters: number, direction: Cardinaldirection) {
  console.log(`Moving ${distanceMeters} meters towards ${direction}`);
}

// ===================================
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

if (rollDice() === 7) {
  throw new Error("Not Possible");
}
if (rollDice() === 4) {
  console.log("success");
}
