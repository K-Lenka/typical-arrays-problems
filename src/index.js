
exports.min = function min(array) {
    return array?.length 
    ? Math.min(...array)
    : 0;

    // if (!(array && array.length)) {
    //     return 0;
    // }

    // let minNumber = array[0];
    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] < minNumber) {
    //         minNumber = array[i];
    //     }
    // }
    // return minNumber;
}

exports.max = function max(array) {
return array?.length
? Math.max(...array)
: 0;

    // if (!(array && array.length)) {
    //     return 0;
    // }

    // let maxNumber = array[0]
    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] > maxNumber) {
    //         maxNumber = array[i];
    //     }
    // }
    // return maxNumber;
}

exports.avg = function avg(array) {
    return array?.length 
    ? array.reduce((acc, val) => acc + val) / array.length
    : 0;
}


