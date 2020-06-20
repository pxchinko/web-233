var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-4-2.js
; Author: Jonathan Roland 
; Date:   20 June 2020
; Modified By: 
; Description: A program to demonstrate array manipulation.
; Expected Output: 
;   Mango
;   Orange
;   Banana
;   Dragonfruit
;   Kiwi 
;===========================================
*/



//declare an array with 5 string values of fruits
var fruits = ['Mango','Orange','Banana','Dragonfruit','Kiwi'];
//call the getFruits function with the fruits array as a parameter
getFruit(fruits);
//this function iterates the values of a given array and outputs each to the console
function getFruit(fruitArray){
    for(var i = 0;i<fruitArray.length;i++){
        console.log(fruitArray[i]);
    }
}

