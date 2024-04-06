"use strict";
let age = 1;
if (age < 2) {
    console.log("You are baby ");
}
else if (age == 2 || age <= 4) {
    console.log("You are a toddler");
}
else if (age == 4 || age <= 13) {
    console.log("You are a kid ");
}
else if (age == 13 || age <= 20) {
    console.log("Your are teenager");
}
else if (age == 20 || age <= 65) {
    console.log("You are an adult");
}
else if (age == 65 || age > 65) {
    console.log("You are an elder");
}
