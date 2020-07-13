var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-7-2.js
; Author: Jonathan Roland
; Date:   12 July 2020
; Modified By:
; Description: A program demonstrating an understanding of constructor functions
;===========================================
*/

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 7.2'));
console.log('\n');

function Employee(id,firstName,lastName,title){
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

var employees = [
  new Employee(1,"Greg","Smith","Manager"),
  new Employee(2,"Aliya","James","Developer"),
  new Employee(3,"Jason","Platt","Developer"),
  new Employee(4,"Tim","Krastick","Developer"),
  new Employee(5,"Jenny","Raines","UX Designer")
];

console.log("Employees");
console.log("---------\n");

employees.forEach(function(employee){
  console.log("\n");
  for (const [key, value] of Object.entries(employee)) {
    console.log(`${key}: ${value}`);
  }
});

