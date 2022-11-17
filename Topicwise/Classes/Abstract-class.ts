abstract class Command {
  abstract commandLine(): string;

  execute() {
    console.log("Executing", this.commandLine());
  }
}

class GitResetCommand extends Command {
  commandLine(): string {
    return "git reset --hard";
  }
}

class GitFetchCommand extends Command {
  commandLine(): string {
    return "git fetch --all";
  }
}

new GitResetCommand().execute();
new GitFetchCommand().execute();

// -----------------------------------------------------------

abstract class Machine {
  constructor(public manufacturer: string) {}
  // An abstract class can define methods of it's own, or...
  summary(): string {
    return `${this.manufacturer} makes this machine.`;
  }
  // Require inheriting classes to implement methods
  abstract moreInfo(): string;
}
class Car2 extends Machine {
  constructor(
    manufacturer: string,
    public position: number,
    protected speed: number
  ) {
    super(manufacturer);
  }
  move() {
    this.position += this.speed;
  }
  moreInfo() {
    return `This is a car located at ${this.position} and going ${this.speed}mph!`;
  }
}
let myCar1 = new Car2("Konda", 10, 70);
myCar1.move(); // position is now 80
console.log(myCar1.summary()); // prints "Konda makes this machine."
console.log(myCar1.moreInfo()); // prints "This is a car located at 80 and going 70mph!"
// =======================================================================================

