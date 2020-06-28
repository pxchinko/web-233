var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-5-3.js
; Author: Jonathan Roland 
; Date:   28 June 2020
; Modified By: 
; Description: A program demonstrating iteration of an Array-Like Object.
; Expected Output:
;    Composers
;
;    First name: Claude, Last name: Debussy, Genre: Impressionism, Rating: 10
;
;    First name: Erik, Last name: Satie, Genre: Minimalism, Rating: 8
;
;    First name: Philip, Last name: Glass, Genre: Contemporary Minimalism, Rating: 7
;
;    First name: Modest, Last name: Mussorgsky, Genre: Russian Romanticism, Rating: 6
;
;    First name: Johann, Last name: Bach, Genre: Baroque, Rating: 9
;===========================================
*/

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 5.3'));
console.log('\n');
//create array like object of composers with first name, last name, genre and rating
var composers = [
    {
        firstName: 'Claude',
        lastName: 'Debussy',
        genre: 'Impressionism',
        rating: 10,
    },
    {
        firstName: 'Erik',
        lastName: 'Satie',
        genre: 'Minimalism',
        rating: 8,
    },
    {
        firstName: 'Philip',
        lastName: 'Glass',
        genre: 'Contemporary Minimalism',
        rating: 7,
    },
    {
        firstName: 'Modest',
        lastName: 'Mussorgsky',
        genre: 'Russian Romanticism',
        rating: 6,
    },
    {
        firstName: 'Johann',
        lastName: 'Bach',
        genre: 'Baroque',
        rating: 9,
    },
];
//title the output
console.log("Composers\n");
//iterate the array like object and output each composer's info on a single line
composers.forEach(function(composer){
    console.log("First name: "+composer.firstName+", Last name: "+composer.lastName+", Genre: "+composer.genre+", Rating: "+composer.rating+"\n");
});