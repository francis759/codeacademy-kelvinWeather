//Kelvin value equivalent for 0 degrees celsius
const kelvin  = 293;
//Celcius equivalent value for kelvin
const celsius = kelvin - 273;
// fahrenheit computation
var fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
