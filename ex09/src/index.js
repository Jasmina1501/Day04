function main() {
    var firstNum = 6;
    var secodNum = 25;
    var thirdNum = 5.2;

    firstNum *= 9;
    secodNum /= 5;
    thirdNum *= 10;

    return {
        firstNum,
        secodNum,
        thirdNum
    };
}
console.log(main());
module.exports = main;