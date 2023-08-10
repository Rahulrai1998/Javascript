const add = (a,b) => a+b
const sub = (a,b) => Math.abs(a+b)
const pro = (a,b) => a*b

// HIGER ORDER FUNCTIONs
const calculator = (a , b , operator) => operator(a,b)

console.log(calculator(5,6,pro))