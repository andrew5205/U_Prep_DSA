
// Navie 
function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for ( let i = 0; i < len; i++) {
        for ( let j = 0; j < len; j++) {
            if ( arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}


// Advance 
function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for ( let i = 0; i < len; i++) {
        if ( mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}


console.log(hasPairWithSum2([1,2,3,4,5,6], 8));










