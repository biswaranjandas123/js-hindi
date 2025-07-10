let score = 33          //test and put the value 33,null,undifiend,true and false  what the terminal found show it//

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);



//note:-

//"33"=> terminal output 33
//null=> 0
//true=> 1
//false=> 0
//undefined=> NaN (Not a Number)
//"334aajsb"=> NaN (Not a Number)



let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// if the value put in isloggedin =0,1,true,false,"","Biswa"
//Answer will be in terminal = false,true,true,false,false,true respectively..............


let haveNumber = "33"

let stringHaveNumber = String(haveNumber);
console.log(stringHaveNumber);
console.log(typeof(stringHaveNumber))

// Her we found that 33 is a string ...terminal output=33 .
// ...but when we code console.log(typeof(stringhavenumber)) out put will be string not a number...