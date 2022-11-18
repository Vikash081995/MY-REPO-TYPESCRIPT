class Passenger {
  firstName: string;
  lastName: string;
  frequentFlyerNo: number;

  constructor(firstName: string, lastName: string, frequentFlyerNo: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.frequentFlyerNo = frequentFlyerNo;
  }
  display() {
    console.log(
      passenger.firstName +
        "" +
        passenger.lastName +
        "" +
        passenger.frequentFlyerNo
    );
  }
}

var passenger = new Passenger("John", "Bailey", 123);
passenger.display();

for(let item in passenger){
    if(passenger[item] instanceOf Function){
        continue;
    }else{
        console.log(item);
        console.log(passenger[item])
    }
}

// ========================more examples=================

class Animal231 {
  private name!: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

let catrm = new Animal231("Cat");
catrm.move(10);
catrm.name = "Dog";

class Bird extends Animal231 {
  fly(distanceInMeters: number): void {
    console.log(`${this.name} flew ${distanceInMeters}m.`);
  }
}


