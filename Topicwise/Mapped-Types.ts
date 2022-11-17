type Properties = "propA" | "propB";
type MyMappedType<T> = {
  readonly [P in keyof T]?: T[P];
};

type MyNewType = MyMappedType<{ a: "a"; b: "b" }>;

// -------------------------------------------

export type Point = {
  x: number;
  y: number;
  z: number;
};

type ReadonlyPoint<T> = {
  readonly [Item in keyof Point]: T[Item];
};
const center: Point = {
  x: 0,
  y: 0,
  z: 0
};
// =========================
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export class State<T> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });
state.update({ y: 123 });
