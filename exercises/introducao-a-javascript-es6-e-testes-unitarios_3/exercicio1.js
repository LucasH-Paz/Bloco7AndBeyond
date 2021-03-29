const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// assert.strictEqual(sum(1,2),3, 'A soma de 1 e 2 é 3');
// assert.strictEqual(sum(4,5),9, 'A soma de 4 e 5 é 9');
// assert.strictEqual(sum(0,0),0, 'A soma de 0 e 0 é 0');
// assert.throws(() => sum(4,'5'));
// assert.throws( () => sum(4,'5'), /^Error: parameters must be numbers$/);

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ] );
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const addOne = (arr) => {
    let newArr = [];
    for (let index =0; index < arr.length; index += 1) {
        newArr.push(arr[index] + 1);
    };
    return newArr;
}


const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);