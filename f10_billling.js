console.clear();
const prompt = require('prompt-sync')();
const store = " STAR MART Store" ;
console.log(store);

let item = ["item1" , "item2", "item3"];
let prices = [2000 , 5000 , 3000];
console.log(item);
console.log(item.length);
console.log(item.push("item4", "item5"));
console.log(prices.push(8000 , 9000));

console.log(item);

console.log("Billing System");
console.log();
console.log("SrNo.\t", "Item\t", "Price");
for(let i = 0 ; i < item.length ; i++){
    console.log((i+1)+ "\t" , item[i] ,"\t",prices[i] );
}
console.log();
let number = Number(prompt("Enter Item No. :"));
let quantity = Number(prompt ("Enter Quantity :"));

console.log(number);
console.log(quantity);
let price = prices[number-1];
let cost = price * quantity;
let discount = 0;
if(cost >= 5000){
    discount = cost * 0.05;
}
else if(cost >= 2000){
    discount = cost * 0.02;
}
else {
    discount = cost * 0.01;
}
console.log("Your discount amount is :", discount);
console.log("Your bill  amount  is : ", cost - discount);


console.log();
