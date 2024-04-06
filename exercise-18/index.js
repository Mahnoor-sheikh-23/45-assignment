"use strict";
let rivers = ["Nile river", "Amozon river", "Yangtze river", "Mississippi River"];
console.log("List of famous river is : ");
rivers.forEach((river, index) => {
    console.log(`${index + 1} : ${river}`);
});
