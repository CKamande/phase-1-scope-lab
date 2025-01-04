// Write your solution in this file!
// Declare a variable in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set bestCustomer in global scope
function setBestCustomer() {
    bestCustomer = 'not bob'; // Implicit global variable (no var/let/const)
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'initial value';

// Function to attempt changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // This will throw an error
}
