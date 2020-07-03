var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-6-2.js
; Author: Jonathan Roland 
; Date:   03 July 2020
; Modified By: 
; Description: A program demonstrating understanding of try/catch/finally exception handling.
;===========================================
*/

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 6.2'));
console.log('\n');

var julyFourth = {
    food: 'bbq',
    drink: 'beer',
    visitWith: ('friends','family'),
    celebrateWith: 'fireworks',
    reason: 'independence'
}

try{
    var work = julyFourth.work;
    if(work === undefined){
        throw 'Reference Error';
    }
    else{
        console.log('Try Clause: '+work);
    }
}
catch(err){
    console.log('Catch clause: ' + err);
}
finally{
    console.log('Finally Clause: End of Program');
}

