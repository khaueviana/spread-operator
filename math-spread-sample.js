//this is bad
var arr = [2, 4, 8, 6, 0]

function max(arr) {
    return Math.max.apply(null, arr);
}

console.log(max(arr));

//this is AMAZING

var max1 = Math.max(...arr)

console.log(max1);