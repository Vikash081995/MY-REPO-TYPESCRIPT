// A type to name a set of numeric values:
// Number values default to 0:
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
let bestDay: Day = Day.Saturday;

// Set a default starting number:
enum TenPlus {
  Ten = 10,
  Eleven,
  Twelve
}
// or assign values:
enum MyOddSet {
  Three = 3,
  Five = 5,
  Seven = 7,
  Nine = 9
}
// --------------------------------------------------------------------

enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

var card = CardSuit.Clubs;
// ===============================
enum Color {
  Red, // 0
  Green, //1
  Blue //2
}

var col = Color.Red;
col = 0; //<--------samw as Color.Red

// =========================================
// Enums and Strings
// =========================================
enum Color {
  DarkRed = 3,
  DarkGreen, //4
  DarkBlue //5
}
// =============================================
enum Status {
  Ready,
  Waiting
}
let status1 = Status.Ready;
let num12 = 0;

status1 = num;
num12 = status1;
// ===================================================
enum FancyType {
  oneArr = <any>[1],
  TwoArr = <any>[2, 2],
  ThreeArr = <any>[3, 3, 3]
}
// How to get all enum values
enum SomeFun {
  A,
  B
}
let enumValues: Array<string> = [];
for (let value in SomeFun) {
  if (typeof SomeFun[value] === "number") {
    enumValues.push(value);
  }
}
// ==========================================================
// Extending Enums without custorm enum implementation
// ==========================================================

enum SourceEnum {
  value1 = <any>"value1",
  value2 = <any>"value2"
}
enum AdditionToSourceEnum {
  value3 = <any>"value3",
  value4 = <any>"value4"
}
type TestEnumType = SourceEnum | AdditionToSourceEnum;
let TestEnum = Object.assign({}, SourceEnum, AdditionToSourceEnum);

function check(test: TestEnumType) {
  return test === TestEnum.value2;
}
console.log(TestEnum.value1);
console.log(TestEnum.value2 === <any>"value2");
// ==========================================================
