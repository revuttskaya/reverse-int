module.exports = function reverse(n) {
    let arr = n.toString().split('');
    let reverseArr = [];
    for (let i = (arr.length - 1); i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return Number.parseInt(reverseArr.join(''));
}
