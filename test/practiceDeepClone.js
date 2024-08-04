let car = {
    type: "Honda",
    color: "red",
    engine: "4"
}


//psudeo code for deep clone function

//clone and return a basic object
//
function deepClone(anyObjectVariable){

    //write down each step in how you're going to handle a simple object that has no functions
    // then code/implement the steps

    //create an empty object
    //object has multiple properties
    //how are we going to get those properties of any object?
    //use the for in loop to get all of the properties and values of the passed in object

    //use the loop to set the property and value with in the new object
    //once all of the properties have been copied into the new object
    //return that object

}


let fastCar = deepClone(car);

console.log(car === fastCar); // this should be false, because these are 2 independent objects but with all of the same properties.

console.log(car.color === fastCar.color);//this should be true

car.color = "blue";
console.log(car.color === fastCar.color);//this should be false


// let fastCar = {
//     type: "Honda",
//     color: "red",
//     Engine: {horsepower: 300, isElectric: false},

// }

//let realyFastCar = deepClone(fastCar);