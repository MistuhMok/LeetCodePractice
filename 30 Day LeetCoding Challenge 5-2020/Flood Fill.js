/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const rows = image.length - 1
    const cols = image[0].length - 1
    const color = image[sr][sc]

    search(sr, sc)
    return image
    
    function search(r,c){
        if(r < 0 || r > rows) return
        if(c < 0 || c > cols) return
        if(image[r][c] !== color || image[r][c] === newColor) return
        
        image[r][c] = newColor
        search(r+1,c)
        search(r-1,c)
        search(r,c+1)
        search(r,c-1)
    }
};
