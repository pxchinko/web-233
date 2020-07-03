var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-6-4.js
; Author: Jonathan Roland 
; Date:   03 July 2020
; Modified By: 
; Description: A program demonstrating understanding of nested object literals and nested value access.
;===========================================
*/

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 6.4'));
console.log('\n');
//create object literal for a ticket with nested 'person' object literal
var ticket = {
    id: 33,
    name: "The Knoxville Symphony Orchestra Presents: The Best of Claude Debussy",
    dateCreated: "07/03/2020",
    priority: 1,
    person: {
        id: 297,
        firstName: "John",
        lastName: "Doe",
        jobTitle: "QA Tester"
    }
}
//output results
console.log("Ticket Data");
console.log("-----------")
console.log("ID: "+ticket['id']);
console.log("Name: "+ticket['name']);
console.log("Date Created: "+ticket['dateCreated']);
console.log("Priority: "+ticket['priority']);
console.log("Person ID: "+ticket['person']['id']);
console.log("Person Name: "+ticket['person']['firstName']+" "+ticket['person']['lastName']);
console.log("Person Job Title: "+ticket['person']['jobTitle']);