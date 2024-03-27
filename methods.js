let tiktoker = "wizishots";
let trimTik = tiktoker.trim();
console.log(trimTik);

let newName= tiktoker.toUpperCase();
console.log(newName);

let padStart= tiktoker.padStart(12,"we");
console.log(padStart);

let replaceActor = tiktoker.replace("wizishots", "bobby");
console.log(replaceActor);

let twoActors = replaceActor.concat(newName);
console.log(twoActors);

let firstLetter = tiktoker.charAt(0);
let newLetter = firstLetter.toUpperCase();
console.log(newLetter);

//number methods
let toString =23456;
let number = toString.toString();
console.log(number);

let newNumber = toString.toFixed(3);
console.log(newNumber);



//math methods

let newNum= 144;
let square = Math.sqrt(newNum);
let squareIndex = Math.pow(100,4);  //raise to power first number being the number ..second number after the comma is te index
console.log(square);
console.log(squareIndex);


let logVal = 2;
let log = Math.log10(logVal);
console.log(log);

