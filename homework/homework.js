// HOMEWORK ASSIGNMENTS:

// Exercise 1:
// Declare a variable, name, and assign it a string value representing your name.
// Declare another variable, greeting, and assign it a string value like "Hello, ".
// Concatenate greeting and name together and store it in a new variable called welcomeMessage.
// Display welcomeMessage using console.log().

// Declare a variable `name` and assign it a string value of your name
var name = "Ani Haq"; 

// Declare another variable `greeting` and assign it a string value "Hello, "
var greeting = "Hello, ";

// Concatenate `greeting` and `name` together and store it in a new variable called `welcomeMessage`
var welcomeMessage = greeting + name;

// Display `welcomeMessage` using console.log()
console.log(welcomeMessage);

// A: Hello, Ani Haq


// Exercise 2
// Declare a variable, temperatureC, and assign it a numeric value representing the current temperature in Celsius.
// Declare a second variable, temperatureF, that is the fahrenheit conversion of temperateC
// Write an if statement to check if the temperature is greater than 80 degrees fahrenheit.
// If it is, display a message saying "It's a hot day!" using console.log(). Otherwise, display "It's not too hot today."

// Declare a variable to store the current temperature in Celsius (Part A)
var temperatureC = 25;

// Convert Celsius temperature to Fahrenheit
var temperatureF = (temperatureC * 9/5) + 32;

// Check if the temperature in Fahrenheit is greater than 80

if (temperatureF > 80) {
    console.log("It's a hot day!");
} else {
    console.log("It's not too hot today.");
}

// A: 25 generates: "It's not too hot today."
// A: 30 generates: "It's a hot day!"


// Exercise 3
// Declare a variable, count, and assign it an initial value of 0.
// Use a while loop to display the value of count by 5s in the console until it reaches 50.
// Increment the value of count by 5 within the loop.

// Declare a variable count and assign it an initial value of 0
var count = 0;

//Display the value of count by 5s in the console until it reaches 50
while (count <= 50) {
    console.log(count);
    count += 5; // Increment the value of count by 5
}
// A: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50