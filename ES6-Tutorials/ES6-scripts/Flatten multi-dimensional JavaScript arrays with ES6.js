/**
 * Flatten multi-dimensional JavaScript arrays with ES6  
 */

const multiDimensionalArray = [ [1, 2], [3, 4], [5, 6] ];

const flattenedArray = [].concat(...multiDimensionalArray);
//[].concat()
//(...rest)

console.log(flattenedArray);
// [1, 2, 3, 4, 5, 6]


// ???  [].concat()  