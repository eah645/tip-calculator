function calcTip(){
/* --------------------------------Step 1: grab the input values------------------------------------------------------ */
let tipAmount = document.getElementById('tipForm').value;
console.log(tipAmount); //sets a variable for the tip Amount selector to the VALUE of the #tipForm selector
let billAmount = document.getElementById('billInput').value;
console.log(billAmount); //sets a variable for the bill amount selector using the VALUE of the #billInput selector


/* ---------------------------------------Step 2: turn strings into numbers, use parseFloat() method to do this.-----------  IE: let vairable = parseFloat(stringVariable)----------------------------- */
let tipNumber = parseFloat(tipAmount);
console.log(tipNumber);   // sets a variable for the Tip Amount that is a number
let billNumber = parseFloat(billAmount);  // sets a variable for the Bill Amount that is a number

/* --------------------------------Step 3: grab the elements---------------------------------------------------------- */
let billP = document.getElementById('bill-p'); // sets a var to the ID of 'bill-p'
let tipP = document.getElementById('tip-p');  // sets a var to the ID of 'tip-p'
let totalP = document.getElementById('total-p');  // sets a var to the ID of 'total-p'

/* --------------------------------Step 4: Place your calculations here----------------------------------------------- */
let totalTip = (tipAmount * billNumber);  // calulate total tip (tip % * bill) and store it in the a new variable
let totalBill = totalTip + billNumber;  // calcualte total bill (totalTip + billAmount (billAmount didn't work)) and store it in a new variable


/* --------------------------------Step 5: Append your HTML content with the new information-----**use .fixed(2) to display the value with 2 decimal places.-------------------- */
document.getElementById('tip-p').innerHTML = "$" + totalTip.toFixed(2); // change the innerHTML of the tip var from step 3 to the total tip from step 4
document.getElementById('bill-p').innerHTML = "$" + billNumber.toFixed(2);  // change the innterHTML of the bill var from step 3 to the total bill var from step 2
document.getElementById('total-p').innerHTML = "$" + totalBill.toFixed(2);  // change the innerHTML of the total var from step 3 to the total bill var from step 4


}
