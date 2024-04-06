let guests = ["Saira","Sumera","Hinza","Sawaira"]
guests.forEach((list)=>{console.log(`Hii!  ${list} i am inviting you on dinner dont't miss that . `);
})

console.log(`\nSORRY my friends i can invite only two people for dinner 
because my table wont't arrive on time\n `);
while(guests.length > 2){
    let removeGuest = guests.pop()
    console.log(`SORRY ! ${removeGuest} i cant invite you for dinner`);
}
guests.forEach((still)=>{console.log(`${still} you are still invited`);
})
guests.pop();
guests.pop();
console.log("EMPTY LIST : ",guests);



