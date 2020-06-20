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
getFruit(fruits);

function getFruit(fruitArray){
    for(var i = 0;i<fruitArray.length;i++){
        console.log(fruitArray[i]);
    }
}

