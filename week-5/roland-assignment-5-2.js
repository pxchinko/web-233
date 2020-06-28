var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-5-2.js
; Author: Jonathan Roland 
; Date:   28 June 2020
; Modified By: 
; Description: A program demonstrating simple use of the forEach() method.
; Expected Output:
;===========================================
*/
console.log(header.display('Jonathan','Roland','Assignment 5.2'));
console.log('\n');

var foodsILike = ['Steak','Seafood','Pizza','Hibachi','Basically anything involving peanut butter :)'];
console.log('Foods I like:\n');
foodsILike.forEach(function(food){
    console.log(food);
});