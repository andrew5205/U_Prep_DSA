
// reverse a strings

function reverseString(str) {
    const output = [];
    for ( let i = str.length-1; i >= 0; i--) {
        output.push(str[i]);
    }
    return output.join('');
}

console.log(reverseString('abcde'));


// ******************************************************* //

function reverse(str) {
    // check input
    if ( !str || str.length < 2 || typeof str !== 'string') {
        return 'hmm thats not good';
    }

    // create output array 
    const backwards = [];
    for ( let i = str.length-1; i >= 0; i--) {
        backwards.push(str[i]);
    }
    // console.log(backwards);
    return backwards.join('');

}

console.log(reverse('abcde'));


// ******************************************************* //

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join('');

console.log(reverse4('spread operator'));