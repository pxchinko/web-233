var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-4-3.js
; Author: Jonathan Roland 
; Date:   20 June 2020
; Modified By: 
; Description: A program to demonstrate array filtering.
; Expected Output: motorcycle
;===========================================
*/

//declare an array with the values of 5 vehicles
var vehicles = ['plane','train','car','motorcycle','helicopter'];
//call the getValue function using the vehicles array as the parameter
getValue(vehicles,'motorcycle');
//this function iterates a given array and outputs a value that matches the second parameter to the console
function getValue(vehiclesArray,filterValue){
    for(var i=0;i<vehiclesArray.length;i++){
        if(vehiclesArray[i]===filterValue){
            console.log(vehiclesArray[i])
        }
    }
}
