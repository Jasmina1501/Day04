function main() {

    var num1 = 8.168
    var num2 = 234e-5;

    var myDecimal = num1.toFixed(1);
    var myDecimalE = num2;
    
return {
    myDecimal,
    myDecimalE
};
}
console.log(main());
module.exports = main;
