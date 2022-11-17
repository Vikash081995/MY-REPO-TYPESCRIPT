function reverseSorted(input: readonly number[]):number[]{
    return input.slice().sort().reverse();
}

const start =[1,2,3,4,5,6,7];
const result1 = reverseSorted(start);
console.log(result1);//[7,6,5,4,3,2,1]
console.log(start);//[1,2,3,4,5,6,7]

