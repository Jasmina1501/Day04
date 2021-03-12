function main() {

    var num1 = 8.168
    var num2 = 0.0025428021501;

    var myDecimal = num1.toFixed(1);
    var myDecimalE = num2.toFixed(5);
    
return {
    myDecimal,
    myDecimalE
};
}
console.log(main());
module.exports = main;
