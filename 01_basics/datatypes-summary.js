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

//++++++++++++++++++++++++++++++++++++++++++++++++++++MEMORY++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory
//There are two type of memory, 1.stack,2.Heap

//Stack:-
// All type of Primitive  are store at stack memory
//ethi copy value ru change hue... Orignal value effect hueni

//Ex- 
let myYoutubename = "biswaYoutube.com"
//see how we data change and how the memory read
let anotherName = myYoutubename
anotherName = "chai or code"
console.log(myYoutubename);    //output biswayoutube.com
console.log(anotherName);      //output chai or code
//moral of the example --49 r value direct but-- jetebele "let anothename" jaga re myyoutubename lekhili
//and "anotherNmae" lekhi "chai or code" lekhili 50 r output "chai or code" aasila...
//  mean copy value change kle copy r value change huchi jemiti another name value change hela but myyoutubename value change helani..
//  main value not change ....copy value change and store



//Heap:-
//All type of Non-primitive are store at Heap memory
//ethi change kle Original value ru change hue..

//Ex-
let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email= "biswa@google.com"

console.log(userOne.email);
console.log(userTwo.email);  

//Her orginal(userOne),copy(userTwo)-----aame userTwo change kalu sethipain userOne chnage hoigala


