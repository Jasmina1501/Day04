function main(numOne, numTwo) {
     var numOne = parseFloat(numOne);
     var numTwo = parseFloat(numTwo);
     var myQuotient = parseFloat(myQuotient);

     myQuotient = numOne / numTwo;
     return myQuotient.toFixed(1);
}
console.log(main(5.0 , 2.0));
console.log(main(16.5 , 5.5));
console.log(main(102.0 , 25.5));
module.exports = main;