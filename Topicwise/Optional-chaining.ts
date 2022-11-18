// Types - null and Undefined ---------

let value: string | undefined | null = null;
value = "hello";
value = undefined;
// ===============

interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}

function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    console.log("No yard ");
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500
};
printYardSize(home);
// =================================================
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" }
};

console.log(fetchedUserData?.job?.title);
