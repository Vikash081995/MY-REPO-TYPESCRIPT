// Type Declaration Space

class Foo1 {};
interface Bar{}
type Bas={};

var foo:Foo;
var bar:Bar;
var bas:Bas;

//variable declaration space 

var someOtherVar = 123;
// ------------------------------------------------------------------
function add12(n1:number, n2:number, showResult:boolean,phrase:string){
    //    if(typeof n1 !== 'number' || typeof n2 !== "number"){}
    //     return n1 + n2;
    // }
    const result12 = n1+n2;
    
    if(showResult){
        console.log(phrase + result12);
    }else{
        return result12;
    }
    
    const number1 = 5;
    const number2 = 10; 
    const printResult = true;
    const resultPhrase = 'Result is:';
    
    const result = add12(number1, number2,printResult,resultPhrase);
    console.log(result);
    