

let car = {
    type: "Honda",
    color: "red",
    engine: "4"
}


//fast car points to the same place in memory
let fastCar = car;

car.type = "ferrari";

console.log(fastCar.type);




let boolTest = true;
//testVar2 makes a copy and doesn't point to the same location in memory. These 2 variables are seperate now.
let testVar2 = boolTest;

testVar2 = false;

console.log(boolTest);


//Deep clone discussion
//The purpose of a deep clone function is to make another object with the same properties 
//What is the purpose of clone - to copy - as it pertains to object variables
//What is difference between assingment operator and to clone something?
//assingment operator is "=" and this is "==" equal, what is this "==="?


//I'm Lahore and I ask for your address in aiport colony
//Azim is in Wah and he asks for your address in airport colony

//what is your address? address is the same

let airportColAddr = { address: "some address",  city:"Rawalpindi"};

let lahoreAddr = airportColAddr;
let wahAddr = airportColAddr;

airportColAddr.city = "Islamabad";

console.log(airportColAddr === lahoreAddr);//this will be true bc it points to the same address
console.log(airportColAddr === wahAddr);//this will be true bc it points to the same address

// all of the object references point to the same address

//When we "clone" an object, we need to create a new object with a differnt address that has it's own properties.

//psudeo code for a deep clone object

let pindiAddress = { address: "some address",  city:"Rawalpindi"};
let IslamabadAddr = { address: "some address",  city:"Rawalpindi"};

console.log(pindiAddress === IslamabadAddr);

//some function/method that clones an object

    // deepClone(anyObject){
    // //method does deep cloning and returns a new object wiht  a different address  
    // return new object
    // }

   //let someNewClonedOjbectReturned = deepClone(pindiAddress);


//console.log(someNewClonedOjbectReturned === pindiAddress);//will this be true or false?



//Passing a Primitive value type:
function changePrimitive(value){
    value = 42;
    console.log("Inside function:" , value);
}

let num = 10;
changePrimitive(num);
console.log("Outside function:" , num);



function modifyPrimitive(value){
    value = true;
    console.log("Inside function:" , value);
}

let boolean = false;
modifyPrimitive(boolean);
console.log("Outside function:" , boolean);




function stringPrimitive(value){
    value = "Hello";
    console.log("Inside function:" , value);
}

let string = "World";
modifyPrimitive(string);
console.log("Outside function:" , string);


let car ={
    color : "Red",

}
function changeCarColor(anyCar){
    anyCar.color = "Blue";
    console.log(anyCar.color);


}

changeCarColor(car);

console.log(car.color);

