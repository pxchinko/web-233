var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-5-4.js
; Author: Jonathan Roland 
; Date:   28 June 2020
; Modified By: 
; Description: A program demonstrating Array-Like Object manipulation using map() and forEach().
;===========================================
*/

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 5.4'));
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
//iterate the array-like object using map() to push only the rating and lastName to new array-like object
var ranked = composers.map(function(composer){
    return {rating: composer.rating,lastName: composer.lastName};
});
//output each composer's rating and last name
console.log('COMPOSERS BY RATING: \n\n');
ranked.forEach(function(composer){
    console.log('Rating: '+composer.rating);
    console.log('Composer: '+composer.lastName+"\n");
});
//iterate the array-like object and push only the genre and lastName to new array-like object
var genre = composers.map(function(composer){
    return {genre: composer.genre,lastName: composer.lastName};
});
//output each composer's last name and genre
console.log('\nCOMPOSERS BY GENRE: \n\n');
genre.forEach(function(composer){
    console.log('Genre: '+composer.genre);
    console.log('Composer: '+composer.lastName+"\n");
});

/* 
EXPECTED OUTPUT:

Jonathan Roland
Assignment 5.4
Date: 6/28/2020


COMPOSERS BY RATING: 


Rating: 10
Composer: Debussy

Rating: 8
Composer: Satie

Rating: 7
Composer: Glass

Rating: 6
Composer: Mussorgsky

Rating: 9
Composer: Bach


COMPOSERS BY GENRE: 


Genre: Impressionism
Composer: Debussy

Genre: Minimalism
Composer: Satie

Genre: Contemporary Minimalism
Composer: Glass

Genre: Russian Romanticism
Composer: Mussorgsky

Genre: Baroque
Composer: Bach
*/