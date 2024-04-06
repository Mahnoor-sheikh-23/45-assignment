"use strict";
let users_Name = ["Olivia Chen", "Emily Johnson", "Jad", "Admin", "charlee", "Liam"];
if (users_Name.length == 0) {
    console.log("We need to find some users !!");
}
else {
    users_Name.splice(0, users_Name.length);
    console.log("Now all user have been removed");
}
