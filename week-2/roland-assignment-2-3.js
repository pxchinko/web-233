var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-2-3.js
; Author: Jonathan Roland 
; Date:   07 June 2020
; Modified By: Jonathan Roland
; Description: Exercise to demonstrate understanding of function properties. Expected output: "Hello Jonathan Roland!"
;===========================================
*/
console.log(header.display('Jonathan','Roland','Assignment 2.3'));
console.log('\n');
//define a new 'jonathan' property of myName() and give it the value "Jonathan"
myName.jonathan = "Jonathan";

//define function myName() and have it return value of property 'jonathan'
function myName(){
    return myName.jonathan;
}

//output to console the project header, a newline and the output of myName() after 'jonathan' property has been set
console.log(header.display('Jonathan','Roland','Exercise 2.3 - Function Properties'));
console.log("\n");
console.log("Hello "+myName()+" Roland!");