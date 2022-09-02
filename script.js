'use strict';

console.log('Hello World');

let x = 10;
console.log(x);

const myName = 'Jonathan';
console.log(myName);

let message;
let usersName = prompt('What is your name');
let message; 
console.log(usersName);
message = 'Hi, ' + usersName + ' ! ' + ' Welcome to my Page . ' ;
if (usersName == 'Jonathan'){
    message = 'Welcome Shisho!';
}
else if(usersName == 'Kassie'){
message = 'Hello Teach';
}
else if(usersName == 'Michael'){
    message = "Wassup Brotha";
}
else if(usersName == 'Jill'){
    message = "Welcome Baby I love you";
}    

else { message = 'Welcome to my site!';
}

let pet = 'cat';

document.write(message);
 
