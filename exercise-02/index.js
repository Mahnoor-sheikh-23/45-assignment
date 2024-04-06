"use strict";
let personName = "Huzaifa";
console.log("lowercase : ", personName.toLowerCase());
console.log("UPPERCASE : ", personName.toUpperCase());
console.log("Tittlecase : ", personName.replace(/\b\w/g, char => char.toUpperCase()));
