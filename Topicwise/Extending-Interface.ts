interface Exterior {
  color: string;
  numOfDoors: number;
}

interface Interior {
  seats: number;
  auto: boolean;
}

interface Car extends Exterior, Interior {
  make: string;
  model: string;
  year: number;
}

var myCar: Car = {
  make: "Honda",
  model: "civic",
  year: 2018,
  color: "Black",
  numOfDoors: 4,
  seats: 4,
  auto: true
};
