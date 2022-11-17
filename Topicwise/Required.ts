// Makes all Properties in T required

type PartialPoint1 = { x?: number; y?: number };

type Point10 = Required<PartialPoint1>;

// usage

type CircleConfig = {
  color?: string;
  radius?: number;
};

class Circle {
  private config: Required<CircleConfig>;

  constructor(config: CircleConfig) {
    this.config = {
      color: config.color ?? "green",
      radius: config.radius ?? 0
    };
  }
  draw() {
    console.log(this.config.color, this.config.radius);
  }
}
