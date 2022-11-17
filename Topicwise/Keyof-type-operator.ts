type Person14 = {
  name: string;
  age: number;
  location: string;
};

const john: Person14 = {
  name: "John",
  age: 24,
  location: "Malbouurne"
};

function logGet(obj: any, key: keyof Person14) {
  const value = obj[key];
  console.log("Getting", key, value);
  return value;
}

const age = logGet(john, "age");

 