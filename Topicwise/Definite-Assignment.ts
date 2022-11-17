let dice!: number;

function rollDice() {
  dice = Math.random() * 6;
}
rollDice();
console.log("Current Dice Value ", dice);
rollDice();
console.log("After Dice Value ", dice);
