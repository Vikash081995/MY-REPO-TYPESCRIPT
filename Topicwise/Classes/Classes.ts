abstract class Department {
  //   public name: string;
  static fiscalYear = 2020;

  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }
  static createEmployee(name: string) {
    return {
      name: name
    };
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfromation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe() {
    console.log("iT Department");
  }
}
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.printEmployeeInfromation();
console.log(it);

class Accounting extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
  describe() {
    console.log("accounting department ");
  }
}
const accounting = new Accounting("d2", []);
accounting.addReport("Something went wrong");
accounting.addReport("Max");
accounting.addReport("Manu");
accounting.printReports();
accounting.printEmployeeInfromation();

// ========================================
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
      this.firstName +
        "" +
        this.lastName +
        "" +
        this.frequentFlyerNo
    );
  }
}

var passenger1 = new Passenger("John", "Bailey", 123);
passenger1.display();
for(let item in passenger1){
    if(passenger1[item] instanceOf Function){
        continue;
    }else{
        console.log(item);
        console.log(passenger1[item])
    }
}

// ========================more examples=================

class Animal231 {
   name123!: string;

  constructor(name123: string) {
    this.name123 = name123;
  }

  move(distanceInMeters: number): void {
    console.log(`${this.name123} moved ${distanceInMeters}m.`);
  }
}

let catrm = new Animal231("Cat");
catrm.move(10);
catrm.name123 = "Dog";

class Bird extends Animal231 {
  fly(distanceInMeters: number): void {
    console.log(`${this.name123} flew ${distanceInMeters}m.`);
  }
}


