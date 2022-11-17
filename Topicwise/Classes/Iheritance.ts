class Car45 {
  public position: number = 0;
  protected speed: number = 42;
  move() {
    this.position += this.speed;
  }
}
class SelfDrivingCar extends Car45 {
  move() {
    // start moving around :-)
    super.move();
    super.move();
  }
}
