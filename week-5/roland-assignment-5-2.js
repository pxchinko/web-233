var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-5-2.js
; Author: Jonathan Roland 
; Date:   28 June 2020
; Modified By: 
; Description: A program demonstrating simple use of the forEach() method.
; Expected Output:
;   Foods I like:
;   
;   Steak
;   Seafood
;   Pizza
;   Hibachi
;   Basically anything involving peanut butter :)
;===========================================
*/
//display the header
console.log(header.display('Jonathan','Roland','Assignment 5.2'));
console.log('\n');
//create array of foods I like
var foodsILike = ['Steak','Seafood','Pizza','Hibachi','Basically anything involving peanut butter :)'];
//title the output
console.log('Foods I like:\n');
//output each type of food using forEach()
foodsILike.forEach(function(food){
    console.log(food);
});