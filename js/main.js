var firstName = 'Hannan '; //firstname is a word
var lastName = 'Abdul-Aziz';
var age = 19; //age is a number

let fullName = firstName + lastName ; 
//console.log(fullName) ;

const boilingWaterTemperatue = 100; 


let a = 56;
let b = 42; 
let result = `${a} + ${b} + ${a+b}`;
console.log(fullName);
console.log(result); 

if (age >= 18) console.log('Welcome to XXX')
else console.log('This page is not for you')

for (let i = 1; i != 8; i ++) {
    console.log('The value of i is', i);
 }
 
 //Funtions - Defining

function isEligible() {
if (age >= 18) 
{return 'Welcome to XXX'}
else{return'This page is not for you!'}
}

//Function- Invoking
//isEligible(); 
console.log(isEligible());
document.body.innerHTML = isEligible();