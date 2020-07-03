var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-6-3.js
; Author: Jonathan Roland 
; Date:   03 July 2020
; Modified By: 
; Description: A program demonstrating understanding of creation and output for object literals.
;===========================================
*/

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 6.3'));
console.log('\n');
//create object literal for a ticket including id, name, and requestor
var ticket = {
    id: 33,
    name: "Jimmy",
    requestor: "Tickets.com"
}
//output each field individually
console.log("Ticket ID: "+ticket.id);
console.log("Ticket Name: "+ticket.name);
console.log("Ticket Requestor: "+ticket.requestor);