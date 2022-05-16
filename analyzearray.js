function analyzeArray(arr) {
    let obj = {};
    if (arr.length === 0) {
        return obj;
    }
    let arraySum = arr.reduce((a, b) => {
        return a + b;
    }, 0)
    if(arraySum % arr.length === 0) {
       obj.average = arraySum / arr.length;
    } else if (arraySum % arr.length !== 0) {
        obj.average = Math.floor(arraySum/arr.length*10)/10;
    };
    obj.min = arr.reduce((a, b) => {
        return Math.min(a,b)
    }, Infinity);
    obj.max = arr.reduce((a, b) => {
        return Math.max(a, b);
    }, -Infinity);
    obj.length = arr.length;

    return obj;
};

module.exports = analyzeArray;