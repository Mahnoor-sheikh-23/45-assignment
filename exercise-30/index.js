"use strict";
let current_user = ["Huzaifa", "Daniyal", "Sheroz", "Fahad", "Rabi"];
let new_users = ["Rimsha", "Kulsoom", "Mahnoor", "Rabiya", "Daniyal", "Faryal", "Rabi"];
new_users.forEach(users => {
    if (current_user.some(current_user => current_user === users)) {
        console.log(`${users} will need to enter a new username  `);
    }
    else {
        console.log(`${users} is available `);
    }
});
