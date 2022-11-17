interface Cart {
  calculateTotal(): number;
}
interface Cart {
  x: number;
}
interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
  x: 1,
  calculateTotal(options?: { discountCode: number }) {
    if(options && options.discountCode) {}
    return 1;
  },
};
// ========================================
function someFunction(){
  return 10;
}

namespace someFunction{
  export const someProperty =10;
}

someFunction.someProperty