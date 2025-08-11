// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Example usage:
let cTemp = 30;
let fTemp = 86;

console.log(cTemp + "°C = " + celsiusToFahrenheit(cTemp) + "°F");
console.log(fTemp + "°F = " + fahrenheitToCelsius(fTemp) + "°C");
