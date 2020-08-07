let removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

/*let removeFromArray = function (array, ...args) {
    for (let i = array.length; i >= 0; i--) {
        for (let j = 0; j < args.length; j++) {
            if (args[j] == array[i]) {
            array.splice(i, 1);
            return array;
            } else continue;
        }
        }
        return array;
}*/

/*let removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}; */

module.exports = removeFromArray
