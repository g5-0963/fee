console.clear();// => clear is a function console is object
console.log("Inventory Entry System"); // "  " => parathesies mein kuch hota hai voh argument ( , lag ke ek se jayad arugment hota)
// function is resusable code  block of code use karte time argument jab nhi use karte toh parameter
// function is return the value
console.log();
const prompt = require("prompt-sync")();
let stock = [];
// empty array of stock
function addstock(){
    let item_code = Number(prompt("Enter Item Code :"));
    let  item_name = prompt("Enter the Item Name :");
    let item_Price = Number(prompt("Enter price :"));
    let item_quantity = Number(prompt("Enter quantity :"));
    
    // Object is a collection of pair(property and value)
    let item  = {
        code : item_code,
        item:item_name,
        price:item_Price,
        quantity:item_quantity,
    };
    // recall properties in html style height : 100px , width : 200px
    // now technical term an array of object
    stock.push(item);
    // now stock is an array of object
    console.log("\nInventory Updated");
    console.log();  
}
// callback Function => A callback function is a function that is passed as an argument to another function and is executed later.
// Arrow Function =>  arrow function is a shorter way to write a function in JavaScript. no name function
// forEach() is an array method used to execute a function for each element of an array.
// While loop
while(true){
    addstock();
    let loop = prompt("Add More Items (0 for No / 1 for Yes) :");
    loop = parseInt(loop); // parseInt convert string into number it will take  the 1.25 into 1 only or 1px into 1
    if(loop ===  0) break;
}
console.log("\n Inventory Entry Completed");
console.log("\n Updated Stock is as follows");
console.log(stock);
console.log();
// console.log(5 + "5") => int 5 ko string convert hota hai i.e "55"(+ concentation understand karta hai)
// console.log(5 - "5" )=> string  convert kart hai number i.e 0 (- as an arthmetic operator use karta hai/)
// === => strict equality hota hai it check datatype as  well as number
// == :- equality hota it only check the number
// NaN => array mein number but ek aisa number diya jo out of bound-
// everywhere is object oriented programming
//  variables which contain the realated variables i.e which show the similar type of data  -> object
// related values store in object 
// why  object ?? for efficient data processing and storage
// jab related ko ek saath rakh te hai tu unko 
// object holds key and value pairs within curly bracket
// this is useful features for storing and processing related data value
// different data values are accessed with dot notation in the format object 
// Arrays => is a user defined data types
// list of element within square brackets
// accessed with index index start with 0
// element must be same data type
// data types are string , number , boolean , object , array
// all elements of an array can be of string type , or number type , or same object type  or even array type also  i.e array can also hold arrys as element
// ⭐js don't throw error if we store element with different data types within an array but we should store element with same data type
// ⭐ js treats array of object with property like length and several useful in built function / methods  like reverse , pop , sort , slice , for efficient processing of data stored within arrays
// Function:
// is reusable block of code 
// used for performing a particular task
// used for data processing or data transformation
// can be in built or user defined / program defined 
// functions have  zero or more parameters
// .. paramters are specified within parentheses after the function name 
// function has to be called for execution of statement inside a function 
// Function return a value through return statment
// A return statment stops execution of the function body and returns a value back at the calling point
// Functions: function expression , arrow function , callback function 
// github => mein output show nhi hota but apka code show hota hai
// to modified files git file => git add
// Save your changes locally with a descriptive message git commit-m "Describe your updates here"
// upload new changes to github git push
// Check history 
// git log -oneline
// After this command we will the answer like this
// git checkout e5f6g7h // code of previous version
// git checkout main => again come to lastest version





