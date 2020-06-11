var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-3-2.js
; Author: Jonathan Roland 
; Date:   10 June 2020
; Modified By: Jonathan Roland
; Description: Exercise to demonstrate understanding of pattern matching functions.
;===========================================
*/

//variables for match testing
var violin = "violin";
var guitar = "guitar";
var piano = "piano";
var bass = "bass";
var guitar2 = "guitar";
var bass2 = "bass";

//evaluate variable matches and output results
if(match(violin,guitar)){
    console.log(logMatch(violin,guitar))
}
else{
    console.log(logMismatch(violin,guitar))
}
if(match(piano,bass)){
    console.log(logMatch(piano,bass))
}
else{
    console.log(logMismatch(piano,bass))
}
if(match(guitar,guitar2)){
    console.log(logMatch(guitar,guitar2))
}
else{
    console.log(logMismatch(guitar,guitar2))
}
if(match(bass,bass2)){
    console.log(logMatch(bass,bass2))
}
else{
    console.log(logMismatch(bass,bass2))
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