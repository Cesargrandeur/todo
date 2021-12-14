// 1.Implement a function, findProduct(), that takes an array of integers, replaces each element of the array with the product of the other elements. 

// let array = [ 1, 2, 3, 4 ] => [24, 12, 8, 6]
// Let array1 = [0,1,2,3,4] => [24, 0, 0, 0]

function findProduct(inte) {
    let result = [];
    let product = 1;
    for (let i = 0; i < inte.length; i++) {
        for (let k = 0; k < inte.length; k++) {
            const temp = inte[k];
            if (inte[i] !== temp) {
                product *= temp
            }
        }
        result.push(product);
        product = 1;
    }
    return result;
}

// console.log(findProduct([1, 2, 3, 4]));

//2.  Write a function that merges elements of at most two arrays and returns an array of the merged elements in sorted order.

// E.g. given, let array1 = [1, 2, 4, 5, 10, 6, 3 ] and let array2 = [0, 8, 19, 90, 11, 16, 13 ]
// Should return => [0,1,2,3,4,5,6,8,10,11,13,16,19,90].

function mergedArrays (array1, array2){
    let joined = [...array1, ...array2]
    joined.sort(function(a,b) {
     return   a - b
    })
    return joined;
}
// console.log(mergedArrays([1, 2, 4, 5, 10, 6, 3 ],  [0, 8, 19, 90, 11, 16, 13 ]));