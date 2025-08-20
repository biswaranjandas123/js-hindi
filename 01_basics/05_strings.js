const name = "Biswaranjan Das"
const repoCount = 30

//console.log(name + repoCount + "value");  //its too old method ..now time we write below 6number like this..

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);  //its new method
//------------------------------



const gameName = new String('Biswagame')   //output is normal and same biswagame like1  but something different
// like 0=B,1=i,2=s,3=w,4=a,5=g,6=a,7=a,8=m,9=e
console.log(gameName[0]);   //output=B
console.log(gameName.__proto__);   //output={} .....{}contain many value like 0=B,......,9=e

console.log(gameName.length); //output=9 (Biswagame is 9 letter)
console.log(gameName.toUpperCase());  //output=BISWAGAME
console.log(gameName.toLowerCase());  //output=biswagame
console.log(gameName.charAt(4));      //output=a 
console.log(gameName.indexOf('a'));   //output=4

const newString = gameName.substring(0, 4)
console.log(newString);    //Bisw only 4 letter output

const anothString = gameName.slice(-9, 4)    //due to slice u can gave the -ve value for reversce process
console.log(anothString);  //

const spaceMethod = "    biswa    "
console.log(spaceMethod);     //output=creat space before after biswa
console.log(spaceMethod.trim());    //output= avoid or ignore space  
//extra know abouttrim go to mdn--start trim----end trim
//-----------------------------------------------------

const url= "https://biswa.com/biswa%20das" //jetebele url hue aape aape space jaga re %20 type hue taku ignorepai aur replace karu
console.log(url.replace('%20','-'));    //%20 KU replace kali '-' ku //output= https://biswa.com/biswa-das 
console.log(url.includes('biswa'));     //url bhitare biswa achhiki //output=true nthile false

//---------------------------------------------------------------string convert in to arry

const convert = " biswa-ranjan-das" //split karibi -
console.log(convert.split('-')); //output= ['biswa','ranjan','das']

//------------research about string --string is imp for everthing--go to mdn for more------     