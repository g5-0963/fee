console.clear();
console.log("Inventory Entry System"); 
console.log();
const prompt = require("prompt-sync")();
let stock = [];

function addstock(){
    let item_code = Number(prompt("Enter Item Code :"));
    let  item_name = prompt("Enter the Item Name :");
    let item_Price = Number(prompt("Enter price :"));
    let item_quantity = Number(prompt("Enter quantity :"));
    
  
    let item  = {
        code : item_code,
        item:item_name,
        price:item_Price,
        quantity:item_quantity,
    };

    stock.push(item);
  
    console.log("\nInventory Updated");
    console.log();  
}

while(true){
    addstock();
    let loop = prompt("Add More Items (0 for No / 1 for Yes) :");
    loop = parseInt(loop);
    if(loop ===  0) break;
}
console.log("\n Inventory Entry Completed");
console.log("\n Updated Stock is as follows");
console.log(stock);
console.log();
