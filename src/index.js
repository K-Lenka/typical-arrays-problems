
exports.min = function min(array) {
    if (!array || !array.length){
    return 0}

       let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
return minNumber;

}

exports.max = function max(array) {
  if (!(array && array.length)) {
        return 0;
    }

    let maxNumber = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

exports.avg = function avg(array) {
    if (!(array && array.length)) {
        return 0;
    }

    let arrAvg = (acc, val) => acc + val;

    return array.reduce(arrAvg) / array.length;
    
}


