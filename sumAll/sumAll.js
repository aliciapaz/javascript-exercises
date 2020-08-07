const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof(a) !== "number" || typeof(b) !== "number") {
    return "ERROR";
    } else { 
    let c = Math.min(a, b);
    let d = Math.max(a, b);
    let finalSum = 0
    while (c <= d) {
        finalSum += c;
        c++;
    } return finalSum;
}}


module.exports = sumAll
