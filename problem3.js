// Problem: 
// Explain what a callback function is and provide a simple example? 

// A callback function is a function that is passed as an argument to another function and is then executed or called within that function. In other words, the function receiving the callback will "call back" or invoke the provided function at a specific time or under certain conditions.

// example: 

const totalSum = (num1, num2, callback) => {
    const result = num1 + num2;
    callback(result);
}

const printResult = (result) => {
    console.log(result);
}

totalSum(2, 3, printResult); 