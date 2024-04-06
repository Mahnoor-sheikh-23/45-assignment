"use strict";
function make_car(manufacture, model, ...options) {
    let car = { manufacture, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
console.log(make_car("toyota", "camry", ["color", "red"], ["year", 2022]));
console.log(make_car("corrola", "ford", ["color", "white"], ["year", 2024]));
console.log(make_car("civic", "fram", ["color", "pink"], ["year", 2022]));
