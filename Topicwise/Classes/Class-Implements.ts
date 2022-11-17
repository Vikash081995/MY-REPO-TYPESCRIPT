interface IFlight {
  flightNo: number;
  from: string;
  to: string;
  display(): void;
}

class Flight implements IFlight {
  flightNo: number;
  from: string;
  to: string;
  flightTime?: string;
  constructor(flightNo: number, from: string, to: string, flightTime?: string) {
    this.flightNo = flightNo;
    this.from = from;
    this.to = to;
    this.flightTime = flightTime;
  }

  display(): void {
    console.log(this.flightNo + "" + this.from + "" + this.to);
  }
}

var flight = new Flight(123, "Austin", "Denver");
flight.display();
