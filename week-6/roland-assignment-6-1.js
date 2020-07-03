var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-6-1.js
; Author: Jonathan Roland 
; Date:   02 July 2020
; Modified By: 
; Description: A program demonstrating understanding of object properties with at least 2 errors.
;===========================================
*/

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 6.1'));
console.log('\n');

var starWarsMovies = {
    epIV:"A New Hope",
    epV;"The Empire Strikes Back",
    epVI:"Return of the Jedi"
};

starWarsMovies.epI = "The Phantom Menace";
starWarsMovies.epII = "Attack of the Clones";
starWarsMovies,epIII = "Revenge of the Sith";

console.log("The prequels: "+starWarsMovies.epI+", "+starWarsMovies.epII+", "+starWarsMovies.epIII);
console.log("The originals: "+starWarsMovies.epIV+", "+starWarsMovies.epV+", "+starWarsMovies.epVI);
console.log("The new trilogy:"+starWarsMovies.epVII+", "+starWarsMovies.epVIII+", "+starWarsMovies.epIX);
console.log("The greatest Star Wars Movie: "+starWarsMovies.epV);

starWarsMovies.epVII = "The Force Awakens";
starWarsMovies.epVIII = "The Last Jedi";
starWarsMovies.epIX = "The Rise of Skywalker";
