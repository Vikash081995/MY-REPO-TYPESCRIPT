const hello2 = (name: string): string => {
  return "Hello" + name;
};
console.log(hello2("Bharath"));
// ===============================

var multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};
console.log(multiply(4, 6));
// ========================
var myarray:Array<any>=[];

for(var i=0;i<10;i++){
    myarray.push(():number=>{return i});
}

for(var i=0;i<10;i++){
    console.log(myarray[i]());
}