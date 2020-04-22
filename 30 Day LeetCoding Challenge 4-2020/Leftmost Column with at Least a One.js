/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    const dimensions = binaryMatrix.dimensions()
    let row = dimensions[0] - 1
    let col = dimensions[1] - 1
    
    while (row>=0 && col>=0){
        if(binaryMatrix.get(row,col) === 0) row--
        else col--
    }

    return col === dimensions[1]-1 ? -1 : col + 1
};
