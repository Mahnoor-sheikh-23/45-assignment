interface car {
    manufacture:string,
    model : string,
    [key:string]:any
}
function make_car(manufacture:string,model:string,...options : [string,any][]):car {
    let car:car = {manufacture,model}
    options.forEach(([key,value])=>{
        car[key] = value
      
    })
return car
}
console.log(make_car("toyota","camry",["color","red"],["year",2022]));
console.log(make_car("corrola","ford",["color","white"],["year",2024]));
console.log(make_car("civic","fram",["color","pink"],["year",2022]));


       


