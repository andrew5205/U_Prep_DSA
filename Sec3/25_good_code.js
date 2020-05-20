

const nemo = ['nemo'];

function findNemo(arr) {
    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] === 'nemo') {
            console.log('Foound NEMO!');
        }
    }
}

findNemo(nemo);


// const findNemo2 = array => {
//     array.forEach( (fish) => {
//         if ( fish === 'Nemo') {
//             console.log('Found Nemo!!');
//         }
//     });
// }

