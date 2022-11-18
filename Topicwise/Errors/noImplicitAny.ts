// Error : someArg has an implicit `any` type
function log(somArg) {
  sendSomeData(somArg);
}
log(123);

function sendSomeData(somArg) {
  console.log(somArg);
}
// --------solution---------
// function log(someArg: number) {
//     sendDataToServer(someArg);
//     }