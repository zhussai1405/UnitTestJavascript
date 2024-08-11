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


// let car = {
//     type: "Honda",
//     color: "red",
//     cylinder : 6
// }


// //psudeo code for deep clone function

// //clone and return a basic object
// //
// function deepClone(anyObjectVariable){
   
//     //write down each step in how you're going to handle a simple object that has no functions
//     // then code/implement the steps
//     let fastCar = {};
//     //create an empty object
//     //object has multiple properties
//     //how are we going to get those properties of any object?
//     //use the for in loop to get all of the properties and values of the passed in object
//     for(let key in anyObjectVariable){
//         //use the loop to set the property and value with in the new object
//         //any object has a key and a value
        
//        // if (anyObjectVariable.hasOwnProperty(key)) {
//             fastCar[key] = anyObjectVariable[key];
//             console.log("fast car copied key " +  fastCar[key]);
//         //}
    
//     }
//     //once all of the properties have been copied into the new object
//     //return that object

//     console.log("copied object " + fastCar.type);
//     return fastCar;

// }

// let fastCar = deepClone(car);
// console.log(fastCar);

// console.log(car === fastCar); // this should be false, because these are 2 independent objects but with all of the same properties.

// console.log(car.color === fastCar.color);//this should be true

// car.color = "blue";
// console.log(car.color === fastCar.color);//this should be false


// console.log(fastCar);
// console.log(car);


let fastCar_ = {
    type: "Honda",
    color: "red",
    Engine: {
        horsepower: 300, 
        isElectric: false
    }
}
function deepClone(obj){
    if (obj === null || typeof obj !== 'object') {          //first check for null or non object type 
        
        return obj;                                         // Return the value if obj is not an object
    }
    let copyNewObj = Array.isArray(obj) ? [] : {};
    //use the for in loop to get all of the properties and values of the passed in object
    for(let key in obj){
        //use the loop to set the property and value with in the new object
        if(obj.hasOwnProperty(key)){  
    copyNewObj[key] = deepClone(obj[key]);
    console.log("fast car copied key " +  copyNewObj[key]);
}
    }
    //return that object
    return copyNewObj;
}

//part 2 
let carWithOjbect = deepClone(fastCar_);

console.log("Car with obj" + carWithOjbect);
console.dir(carWithOjbect);
console.log( carWithOjbect === fastCar_);//this should be false
console.log(carWithOjbect.color === fastCar_.color);//this should be true
console.log(carWithOjbect.Engine === fastCar_.Engine);//this should be false
console.log(carWithOjbect.Engine.horsepower === fastCar_.Engine.horsepower);//this should be true
console.log(carWithOjbect.Engine.isElectric === fastCar_.Engine.isElectric);//this should be true


carWithOjbect.Engine.horsepower = 600;

console.log(carWithOjbect.Engine.horsepower === fastCar_.Engine.horsepower);//this should be false


