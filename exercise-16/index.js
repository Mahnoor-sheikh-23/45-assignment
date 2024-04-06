"use strict";
let placesName = ["Istanbul", "Sydney", "Rome", "Barcelona", "Dubai", "Argentina"];
// original list
console.log("Original list : ", placesName);
// alphabatical order
console.log("alphabatical order : ", [...placesName].sort());
// checking original list
console.log("again original list : ", placesName);
// reverse alphabatical order
console.log("reverse alphabatical order : ", [...placesName].sort().reverse());
// again checking original list
console.log("again my original list : ", placesName);
// reverce 
console.log("Reverse : ", placesName.reverse());
//  again reverse:
console.log("again reverse : ", placesName.reverse());
// again sorted:
console.log("again sorted : ", placesName.sort());
// again reverse and sort:
console.log("again reverse and sort : ", placesName.sort().reverse());
