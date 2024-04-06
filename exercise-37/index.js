"use strict";
function city_country(city, country) {
    return (`"${city},${country}"`);
}
console.log(city_country("Paris", "France"));
console.log(city_country("Crio", "Egypt"));
console.log(city_country("Moscow", "Russia"));
