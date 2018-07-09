/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//
// Gather data from the user using the prompt() command.
// Users will fill in each prompt with text.
// Provide examples where it may help (e.g. show a comma-separated list of
// toppings to indicate how to specify toppings, etc.)


let breadOrder = prompt('What kind of bread would you like? (white, wheat, or flat)', 'wheat');


let meatOrder = prompt('What kind of meat would you like? (Separate multiple meats with a comma.)');


let toppingOrder = prompt('What toppings would you like? (Separate multiple toppings with a comma.)');


let condimentOrder = prompt('What condiments would you like? (Separate multiple condiments with a comma.)');

// Step Two ////////////////////////////////////////////////////////////
//
// Process all the input to calculate values for the user's order. The named
// values are initialized to `null`. Change that so they equal the proper value.
//
// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};


let meatArray = meatOrder.split(',');
let toppingArray = toppingOrder.split(',');
let condimentArray = condimentOrder.split(',');


let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;


let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;


let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;


let totalPrice = subtotal + orderTax;

let total15Tip = totalPrice * .15;
let total20Tip = totalPrice * .2;
let total25Tip = totalPrice * .25;


// Step Three //////////////////////////////////////////////////////////


let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Toppings: ${toppingOrder}</p>
    <p>Condiments: ${condimentOrder}
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
    <p class="text-left">Suggested Tip</p>
    <p class="text-left">15% = $${total15Tip.toFixed(2)}</p>  
    <p class="text-left">20% = $${total20Tip.toFixed(2)}</p> 
    <p class-"text-left">25% = $${total25Tip.toFixed(2)}</p>
`


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
