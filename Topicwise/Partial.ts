//Make all properties in T optional

type Point9 = { x: number; y: number };

type PartialPoint = Partial<Point9>;

class State<T> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

// USAGE
const state = new State({ x: 0, y: 0 });
state.update({ y: 123 });
console.log(state.current);
