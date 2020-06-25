/*
============================================
; Title:  roland-assignment-5-1.js
; Author: Jonathan Roland 
; Date:   24 June 2020
; Modified By: 
; Description: A program utilizing a keyed collection array with at least two errors.
; Expected Output:
;
;   The Modes of Western music:
;
;   I: Ionian
;   II: Dorian
;   III: Phrygian
;   IV: Lydian
;   V: Mixolydian
;   VI: Aeolian
;   VII: Locrian
;===========================================
*/

let modes = Map();
modes.set('I','Ionian');
modes.set('II','Dorian');
modes.set('III','Phrygian');
modes.set(,'Lydian');
modes.set('V','Mixolydian');
modes.set('VI','Aeolian');
modes.set('VII','Locrian');
console.log('The Modes of Western music:\n');
for(let (key,value) of mode){
    console.log(key+': '+value);
}