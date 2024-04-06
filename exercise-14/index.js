"use strict";
let guest = ["Saira", "Sumera", "Hinza", "Sawaira"];
guest.forEach((list) => {
    console.log(`Hii!  ${list} i am inviting you on dinner dont't miss that . `);
});
console.log("\nhey people!! I found a new and big dining table for you \n   ");
guest.unshift("Umema");
guest.push("Neha");
guest.splice(3, 0, "Jaweriya");
guest.forEach((huge) => { console.log(`${huge} tonight we are going to having fun so din't miss all this `); });
