/*
============================================
; Title: Assignment 1.5
; Author: Jonathan Roland
; Date: 31 May 2020
; Modified By: Your Name Here
; Description: Practice manipulating variable values and output options with 3 fake employees.
;===========================================
*/

//declare variable name spaces
var firstName;
var lastName;
var address;
var payRate;
var hireDate;

//set values for first employee
firstName = "Bob";
lastName = "Smith";
address = "123 Gray Street";
payRate = 85493.55;
hireDate = new Date(2012, 3, 15);

//output first employee information
console.log("First Employee");
console.log("First Name: "+firstName);
console.log("Last Name: "+lastName);
console.log("Address: "+address);
console.log("Pay Rate: $"+payRate.toFixed(1));
console.log("Hire Date: "+hireDate.toLocaleDateString());
console.log("------------------------------------------"); //for visual separation of employee information on output.

//set values for second employee
firstName = "Jenny";
lastName = "Jones";
address = "4565 8th Street";
payRate = 89562.73;
hireDate = new Date(2010, 5, 1);

//output second employee information
console.log("Second Employee");
console.log("First Name: "+firstName);
console.log("Last Name: "+lastName);
console.log("Address: "+address);
console.log("Pay Rate: $"+payRate.toFixed(1));
console.log("Hire Date: "+hireDate.toLocaleDateString());
console.log("------------------------------------------"); //for visual separation of employee information on output.

//set values for third employee
firstName = "Darth";
lastName = "Vader";
address = "1 Executive Suite, Death Star";
payRate = 775398007.75;
hireDate = new Date(1977, 05, 23);

//output third employee information
console.log("Third Employee");
console.log("First Name: "+firstName);
console.log("Last Name: "+lastName);
console.log("Address: "+address);
console.log("Pay Rate: $"+payRate.toFixed(1));
console.log("Hire Date: "+hireDate.toLocaleDateString());
console.log("------------------------------------------"); //for visual separation of employee information on output.