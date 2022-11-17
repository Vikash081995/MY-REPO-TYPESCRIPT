type SomeType = number;
type MyConditionalType = SomeType extends string ? string : null;
// ======================================
function someFunction<T>(value: T) {
  const someOtherFunction = (
    someArg: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {
    const a: "TYPE A" | "TYPE B" = someArg;
  };
  return someOtherFunction;
}

const result = someFunction(true);
// ====================
type IsNumber<T> = T extends number ? "number" : "other";

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

const isNumber = (value: unknown) =>
  typeof value === "number" ? "number" : "other";

const withNumber = isNumber(124);
const withOther = isNumber("heelo");
