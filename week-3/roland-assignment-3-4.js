var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-3-4.js
; Author: Jonathan Roland 
; Date:   11 June 2020
; Modified By: Jonathan Roland
; Description: Exercise to demonstrate understanding of loops.
;===========================================
*/

const test = 7;

for (var x = 0; x < 10; x++) {
    var randomNum = Math.floor((Math.random() * 10) + 1);
    if(match(test,randomNum)){
        console.log(logMatch(test,randomNum))
    }
    else{
        console.log(logMismatch(test,randomNum))
    }
}

//FUNCTIONS
//takes in two parameters, compares them, and returns true if they are an exact match, else returns false.
function match(firstParam,secondParam){
    if(firstParam===secondParam){
        return true
    }
    else{
        return false
    }
}

//returns a message with given parameters stating that they do not match
function logMismatch(firstParam,secondParam){
    return "The values "+firstParam+" and "+secondParam+" do not match."
}

//returns a message with given parameters stating that they match
function logMatch(firstParam,secondParam){
    return "The values "+firstParam+" and "+secondParam+" match."
}