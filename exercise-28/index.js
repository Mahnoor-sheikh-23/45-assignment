"use strict";
let user_Name = ["Olivia Chen", "Emily Johnson", "Jad", "Admin", "charlee", "Liam"];
for (let names of user_Name) {
    if (names.includes("Admin")) {
        console.log(" Hello admin, would you like to see a status report ?");
    }
    else {
        console.log(`hello ${names} thank you for logging in again`);
    }
}
