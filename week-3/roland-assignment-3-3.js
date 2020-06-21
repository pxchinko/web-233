var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-3-3.js
; Author: Jonathan Roland 
; Date:   11 June 2020
; Modified By: Jonathan Roland
; Description: Exercise to demonstrate understanding of switch blocks.
;===========================================
*/
console.log(header.display('Jonathan','Roland','Assignment 3.3'));
console.log('\n');

//declare a constant to test against
const theAnswerToTheUltimateQuestion = 42;
//I wanted to have some fun with this one so I went with a Hitchhiker's Guide to the Galaxy theme.
switch (theAnswerToTheUltimateQuestion){

    case "Zaphod Beeblebrox":
        console.log("A hoopy frood!");
        break;

    case "Dolphins":
        console.log("So long, and thanks for all the fish!");
        break;

    //The correct answer
    case 42:
        console.log("How many roads must a man walk down? "+theAnswerToTheUltimateQuestion+". Hey, that's not bad!");
        break;

    default: 
        console.log("Don't forget to bring a towel!");
        break;

}
