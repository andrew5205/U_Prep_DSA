
class HashTable {
    constructor(size) {
        // anoter way to instantiate an array in JS 
        this.data = new Array(size);
    }

    // generate a hash 
    // _ means a private property 
    _hash(key) {
        let hash = 0;
        for ( let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // O(1)
    // no looping 
    set(key, value) {
        let address = this._hash(key);
        if ( !this.data[address]) {
            this.data[address] = [];
            // this.data[address].push([key, value]);
            // console.log(this.data);
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    //  O(1) - for no colision cases 
    //  O(n) if limited space, store into bucket, then have to loop into bucket 
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if ( currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        // console.log(currentBucket);
    }


    // O(n) 
    // to loop into to find the key
    // key is like index in array
    keys() {
        const keysArray = [];
        for ( let i = 0; i < this.data.length; i++) {
            if ( this.data[i]) {
                // console.log(this.data);
                // console.log(this.data[i]);
                // console.log(this.data[i][0][0]);
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}


const myHashTable = new HashTable(50);
// const myHashTable = new HashTable(2);

// set() 
myHashTable.set('grapes', 10000);
myHashTable.set('apple', 200);
myHashTable.set('orange', 50);
// console.log(myHashTable.set('grapes', 10000));
// console.log(myHashTable.set('apple', 200));
// console.log(myHashTable.data);


// myHashTable.get('grapes');
console.log(myHashTable.get('grapes'));


myHashTable.keys();
console.log(myHashTable.keys());





// // colision prevention
// keys() {
//     if (!this.data.length) {
//         return undefined
//     }
//     let result = []
//     // loop through all the elements
//     for (let i = 0; i < this.data.length; i++) {
//         // if it's not an empty memory cell
//         if (this.data[i] && this.data[i].length) {
//           // but also loop through all the potential collisions
//             if (this.data.length > 1) {
//                 for (let j = 0; j < this.data[i].length; j++) {
//                     result.push(this.data[i][j][0])
//                 }
//             } else {
//                 result.push(this.data[i][0])
//             } 
//         }
//     }
//     return result; 
// }

