type SomethingComplex={
    fooler:number,
    bar67:string
}
function takeSomethingComplex(arg:SomethingComplex){
}
function getBar():string{
    return 'some bar'
}

// Error
const fail={
    fooler:123,
    bar67:getBar
}
takeSomethingComplex(fail);