let score = 33          //test and put the value 33,null,undifiend,true and false  what the terminal found show it//

console.log(typeof score); //output number   //if the score is "33" ---output string not number
console.log(typeof(score));  //output number  

let valueInNumber = Number(score)
console.log(typeof valueInNumber);   //number   //if the score is"33" then  the output is number
console.log(valueInNumber);  //33



//note:-

//"33"=> terminal output 33
//null=> 0
//true=> 1
//false=> 0
//undefined=> NaN (Not a Number)
//"334aajsb"=> NaN (Not a Number)



let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);      //output false

// if the value put in isloggedin =0,1,true,false,"","Biswa"
//Answer will be in terminal = false,true,true,false,false,true respectively..............


let haveNumber = "33"

let stringHaveNumber = String(haveNumber);
console.log(stringHaveNumber);               // output is 33
console.log(typeof(stringHaveNumber))        // output is string

// Her we found that 33 is a string ...terminal output=33 .
// ...but when we code console.log(typeof(stringhavenumber)) out put will be string not a number...

// *************************************** Operation **********************************************

let value = 3
let negValue = -value
console.log(negValue);

//string addition 
let str1 = "hello"
let str2 = " Biswa"
let str3 = str1 + str2
console.log(str3);        //in the case output = hello Biswa


console.log(1+"2");       //output12
console.log("1"+2);       //12
console.log("1"+2+2);     //122
console.log(1+2+"2");     //32     her the string only 2 1+2=3...so the number is 32
console.log(1+"2"+2);     //122

console.log(+false);  //output = 0
console.log(+true);   //output = 1               //this three type of code called operative presidence-that's describe about priorety
console.log(+"");     //output = 0


let gameCounter = 100     // gamecounter value always increasses
gameCounter++;  // her  we called prefix and postfix ...please read in.." js mdn".. searching//out put=101 increase
console.log(gameCounter);
  


//****************if u want to read this topic, then go to "ECMAScript 2024" => then go left 7option "ABSTRACT OPERATION"****/