// let bio = ["Rahul" , "Kumar" , 24]
// // CONVENTIONAL  WAY OF ELEMENTS ACCESSING
// let firstName = bio[0];
// let lastName = bio[1];
// console.log(firstName , lastName)

// // ES6 method // Using Array Destructuring

// let [fName , lName , age , profile="SDE"] = bio;
// console.log(fName ,lName , age , profile)

// Object Destructuring

// const MyBio = {
//     firstName : "Rahul" ,
//     lastName : "Kumar" ,
//     age : 24
// }

// // CONVENTIONAL WAY
// console.log(MyBio.firstName , MyBio.lastName , MyBio.age)

// // Destructuring

// const {firstName , lastName , age} = MyBio
// console.log(firstName , lastName ,age)

// DYNAMIC VALUES SETTING IN OBJECTS

// const valueOne = "greeting"
// const valueTwo = "Rahul"

// const testOne = {

//     [valueOne] : "Greet",
//     [valueTwo] : "Rahul"

// }
// console.log(testOne)

// const myName = "Rahul";
// const age = 24;

// // Key-Value with same name
// const bio = {
//   myName,
//   age,
// };
// console.log(bio.myName , bio.age)


// const a = [1,2,3,4,5]
// const b = [...a , 6 , 7 , 8]
// console.log(b)

// const obj = {
//     one : 1 , 
//     two : 2 , 
//     three : 3
// }
// const objTwo = {
//     ...obj , 
//     four : 4 , 
//     five : 5
// }

// console.log(objTwo)


// let a = "string"
// console.log(a.padStart(8, '*'))


// const obj = {
//     name : "Shivam",
//     age : 21
// }

// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// function rest(...args){
//     console.log(args);
// }
// rest(5 , 6 , 7)


// const arr = [
//     [1,2],
//     [1,6],
//     [1 , 2  ,[1 , 2]]
// ]

// console.log(arr.flat(Infinity))


// const obj = {
//     name : "rahul",
//     age : 24
// }
// console.log(Object.entries(obj))

// console.log(Object.fromEntries(Object.entries(obj)))


// console.log(typeof 16n)
// console.log(Number.MAX_SAFE_INTEGER)

// "use strict"

// var a = 5
// console.log(a)