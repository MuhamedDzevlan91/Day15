const milili = [10, 25, 4];

function myArr(mili) {
    "use strict";

    const milili = [10, 25, 4]
    milili[0] = 4;
    milili[1] = 10;
    milili[2] = 25;
    return milili;
}

console.log(myArr(milili));

module.exports = myArr;