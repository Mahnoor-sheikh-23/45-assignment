"use strict";
let friendss = ["Saira", "Sumera", "Hinza", "Sawaira"];
friendss.forEach((list) => {
    console.log(`Hii!  ${list} i am inviting you on dinner dont't miss that .\n `);
});
// starting from exercise 12
let dontcome = friendss[2];
console.log(`\t Sorry guyz unfortunately ${dontcome} can't make the dinner  `);
friendss.splice(2, 1, "Isra");
friendss.forEach((gues) => {
    console.log(`
but ${gues} you are still invited so don't forget`);
});
