var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-4-4.js
; Author: Jonathan Roland 
; Date:   20 June 2020
; Modified By: 
; Description: A program to demonstrate understanding of predicates and filters.
; Expected Output: 
;  -- ORIGINAL ARRAY --
;  Alabama
;  Nebraska
;  Iowa
;  California
;  Nevada
;
;  -- SORTED ARRAY --
;  Alabama
;  California
;  Iowa
;  Nebraska
;  Nevada
;
;  -- SELECTED VALUE --
;  Iowa
;===========================================
*/
console.log(header.display('Jonathan','Roland','Assignment 4.4'));
console.log('\n');
//create an array with 5 states
var states = ['Alabama','Nebraska','Iowa','California','Nevada'];
// designate Iowa as the selected state to filter for
var selectedState = 'Iowa';
//output the original array using iterateStates() for DRY principle
console.log('--ORIGINAL ARRAY--\n');
iterateStates(states);
//use sort() for alphabetizing
var sortedStates = states.sort();
//output sorted array using iterateStates() for DRY principle
console.log('\n--Sorted States--\n');
iterateStates(sortedStates);
//output sorted value
console.log('\n--SELECTED VALUE--');
//use an anonymized function to call getState() and pass it the current value being iterated and compare to the selectedState value
var filteredStates = states.filter(function(currentValue){
    //when the return of the getState() evaluation is true, the outer filter function will pass the current value to the filteredStates array
    return getState(currentValue,selectedState);
});
//since only one value is expected, output position 0 to console.
console.log(filteredStates[0]);

//FUNCTIONS

//this function iterates over an array and outputs each value to the console
function iterateStates(statesArray){
    for(var i = 0;i<statesArray.length;i++){
        console.log(statesArray[i]);
    }
}
//this functions evaluates two strings and returns true if they match, false if they do not
function getState(stringOne,stringTwo){
    //console.log('called the getState function with these parameters: '+stringOne+', '+stringTwo);
    if(stringOne === stringTwo){
        return true;
    }
    else{
        return false;
    }
}

