type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "john"
};

for(var item in user){
  console.log(item);
}