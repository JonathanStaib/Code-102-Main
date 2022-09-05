'use strict';

console.log('Hello World');

// let x = 10;
// console.log(x);

// const myName = 'Jonathan';
// console.log(myName);

// function functionname(parametes){code to execute}
let usersName = prompt('What is your name');
function greetUser(){

 document.write(' Hello ' + usersName);
  return usersName;
}

function customMessage(){
 let message; 
 // console.log(usersName);
 // message = 'Hi, ' + usersName + ' ! ' + ' Welcome to my Page . ' ;


  if (usersName === 'Jonathan'){
    message = 'Welcome Shisho!';
 }
  else if(usersName === 'Kassie'){
    message = 'Hello Teach';
 }
  else if(usersName === 'Michael'){
    message = "Wassup Brotha";
 }
  else if(usersName=== 'Jill'){
    message = "Welcome My Love";
 }    

  else { message = 'Welcome to my site!';
 }

 document.write(message);
}

let answer = prompt('Whats my favorite color')
function colorAnswer(){
    let message;

    if (answer == 'Purple'){
      message = 'Yes Correct!';
    }
    else { message = 'Incorrect that color is nice as well though unless its yellow';
}
 document.write(message);
}
// colorAnswer();
// customMessage();

// function addTwoNumbers(num1,num2){
//     return num1 + num2
// }

// let myNewNumber = addTwoNumbers(10,10);
// console.log(myNewNumber)

 



