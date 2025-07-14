//There are two type of data type   1.primitive, 2.Non-primitive or(referencetype)

//Primitive:-
// Here 7type of data type;- String, Number, Boolean, Null, Undefined, Symbol, BigInt
//Ex-
const outsideTemp = null
let userEmail;  //----undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // her output is False -- because the id another id are not same so that value is false

const bigNumber = 56474506930662620353232n  //BigInt



//RefernceType(Non-primitive):-
//Array, Objects, Functions

//Ex;-

const heros = ["shaktiman", "naagraj"]  //Arry

let myObj = {
    name:"Biswa",     // object always in side the {}...
}

//we  can treat the function as a veriable
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction)    // typeof describe the data type // out put objectfunction

//  https://262.ecma-international.org/5.1/#sec-11.4.3  