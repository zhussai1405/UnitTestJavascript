/*write down each step in how you're going to handle a simple object that has no functions then code/implement the steps.
    1. Define object with properties and values.
    2. Access the object properties using the dot notation or bracket notation 
    3. Modidy the object properties by assigning a new values.
    4. Create a copy of the object let anotherCopiedCar = Object.assign({}, car);
    5. Add new properties 
/*psudeo code for deep clone function
    function deepClone(originalObject):
    create an empty object called clonedObject
    for each property in originalObject:
    clonedObject[property] = originalObject[property]
    return clonedObject*/

//clone and return a basic object
//object has multiple properties
//how are we going to get those properties of any object?
//use the for in loop to get all of the properties and values of the passed in object
//use the loop to set the property and value with in the new object
//once all of the properties have been copied into the new object
//return that object


let car = {
    type: "Honda",
    color: "red",
    engine: "4"
}

let fastCar = car;
console.log(fastCar);

fastCar.color = "blue";
fastCar.type = "Suzuki"
console.log(car);
console.log(fastCar);


function deepClone(anyObjectVariable) {
    //create an empty object
    let fastCar = {};
    //use the for in loop to get all of the properties and values of the passed in object
    for (let key in anyObjectVariable) {
    //use the loop to set the property and value with in the new object
        fastCar[key] = anyObjectVariable[key];
    }

    //return that object
    return fastCar;
}



 
// console.log(car === fastCar); // this should be false, because these are 2 independent objects but with all of the same properties.

// console.log(car.color === fastCar.color);//this should be true

// car.color = "blue";
// console.log(car.color === fastCar.color);//this should be false

 


// let fastCar_ = {
//     type: "Honda",
//     color: "red",
//     Engine: {
// horsepower: 300, 
// isElectric: false
// }
// }
