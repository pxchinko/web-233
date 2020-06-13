/*
============================================
; Title:  roland-assignment-3-1.js
; Author: Jonathan Roland
; Date:   12 June 2020
; Modified By: Sarah Massie
; Description: A switch statement with at least two errors.
;===========================================
*/

// set a value to test against
const test = "X";
// a switch statement to test for certain value matches
switch (test) { // () around test to put the constant into the function as a parameter
    case "A":
        console.log("test is A");

    case "E":
        console.log("test is E");

    case "H": // : after "H" to encompass what the case is
        console.log("test is H");

    case "P":
        console.log("test is P");

    case "T":
        console.log("test is T");

    case "X":
        console.log("test is X");
}
