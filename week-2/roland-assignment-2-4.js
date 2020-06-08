var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-2-4.js
; Author: Jonathan Roland 
; Date:   07 June 2020
; Modified By: Jonathan Roland
; Description: Exercise to demonstrate understanding of function invocation.
;===========================================
*/

//create vars from function returns to demonstrate functions
var myFullName = fullName("Jonathan","Roland");
var exampleDate = dateWriter("2012","08","27");
var fixedNumber = formatNumber(3.2578955,4);
var convertedInt = "12";
var convertedFloat = "24.987723";

//takes in first and last name and returns concatenated full name.
function fullName(firstName,lastName){
    return firstName+" "+lastName
}
//takes in values for year, month, and day and returns a date
function dateWriter(year,month,day){
    //month is minus one to account for converting given string value to zero based month count in Date() object instantiation
    var dateToReturn = new Date(year,month-1,day);
    return dateToReturn.toLocaleDateString();
}
//formats a given number to a given fixed position
function formatNumber(number,numberOfFixedPositions){
    return number.toFixed(numberOfFixedPositions)
}
//converts a string numerical int value to an int
function convertToInt(stringToConvert){
    return parseInt(stringToConvert);
}
//converts a string numerical float value to a float
function convertToFloat(stringToConvert){
    return parseFloat(stringToConvert)
}

//output to console the project header and values of vars that demonstrate each function.
console.log(header.display('Jonathan','Roland','Exercise 2.4 - Functions'));
console.log("\n");
console.log(myFullName);
console.log(exampleDate);
console.log(fixedNumber);
console.log(convertedInt);
console.log(convertedFloat);