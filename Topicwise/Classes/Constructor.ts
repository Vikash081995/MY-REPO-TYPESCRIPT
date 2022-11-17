class Car345 {
  public position: number;
  protected speed: number;
  constructor(position: number, speed: number) {
    this.position = position;
    this.speed = speed;
  }
  move() {
    this.position += this.speed;
  }
}

// All this code can be resumed in one single constructor:
class Car3451 {
  constructor(public position: number, protected speed: number) {}
  move() {
    this.position += this.speed;
  }
}
// -------------------------------------------------------------