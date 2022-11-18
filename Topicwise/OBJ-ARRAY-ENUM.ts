const person: {
  name: string;
  age: number;
} = {
  name: "Maximilian",
  age: 30
};
console.log(person.name);
console.log(person.age);

// =====nested object
// const product:{
//     id:string;
//     price:number;
//     tags:string[];
//     details:{
//         title:string;
//         description:string;
//     };
// } = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet- almost brand-new!"
//   }
// };
// ===============

const person23: {
  name: string;
  age: number;
  hobbies: string[];
  role: string[];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: ["2", "author"]
};

// person.role.push('admin');
// person.role[1]= 10;

let favoriteActivities: string[];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
favoriteActivities = ["Sports"];

console.log(person23.name);

for (const hobby of person23.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === "READ-ONLY-USER") {
  console.log("is read only");
}

// ===============ENUM==============
// eslint-disable-next-line @typescript-eslint/no-unused-vars

enum Role {
  ADMIN='ADMIN',
  READ_ONLY=100,
  AUTHOR='AUTHOR'
}

const person25: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role.ADMIN;
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: ["2", "author"]
};

if (person25.role === Role.ADMIN) {
  console.log("is ADMIN");
}
