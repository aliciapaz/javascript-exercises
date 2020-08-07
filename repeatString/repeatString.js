const repeatString = function(str, a) {
    let finalString = "";
    let i = 0;
    if (a < 0 || Math.floor(a) !== a) return "ERROR";
    else {
    while (i < a) {
        finalString += str;
        i++
    }
    return finalString;
    }
    }

module.exports = repeatString