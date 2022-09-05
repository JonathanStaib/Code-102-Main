'use strict';

console.log('Hello World');

let x = 10;
console.log(x);

// const myName = 'Jonathan';
// console.log(myName);

// function functionname(parametes){code to execute}

function greetUser(){
 let usersName = prompt('What is your name');
 document.write(' Hello ' + usersName);
  return usersName;
}

greetUser();

function customMessage(customName){
 let message; 
 // console.log(usersName);
 // message = 'Hi, ' + usersName + ' ! ' + ' Welcome to my Page . ' ;


  if (customName == 'Jonathan'){
    message = 'Welcome Shisho!';
 }
  else if(customName == 'Kassie'){
    message = 'Hello Teach';
 }
  else if(customName == 'Michael'){
    message = "Wassup Brotha";
 }
  else if(customName == 'Jill'){
    message = "Welcome My Love";
 }    

  else { message = 'Welcome to my site!';
 }

 document.write(message);
}

customMessage();

// function addTwoNumbers(num1,num2){
//     return num1 + num2
// }

// let myNewNumber = addTwoNumbers(10,10);
// console.log(myNewNumber)

 



