//function expression
const calculation = function(number1, number2){
    const squared = (number1*number1) + (number2*number2);
    return squared*squared;
}

//function declaration
const calculation2 = function(number1, number2){
    const squared = (number1*number1) + (number2*number2);
    return squared*squared;
}

//arrow function
const calculation3 = function(number1, number2){
    const squared = (number1*number1) + (number2*number2);
    return squared*squared;
}

console.log(calculation(2,2));
console.log(calculation2(2,2));
console.log(calculation3(2,2));
