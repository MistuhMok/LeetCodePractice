//https://leetcode.com/problems/maximum-students-taking-exam/
//Not the cleanest solution, can be refactored

/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function(seats) {
    const dirs = [[0,1], [0,-1], [-1,-1], [-1,1]]

    let seatCount = 0
    const height = seats.length
    const width = seats[0].length

    for(let r = 0; r < seats.length; r++){
        for(let c = 0; c < seats[0].length; c++){
            if(seats[r][c] === '.'){
                let tmp = search(r, c, copy())
                seatCount = Math.max(seatCount, tmp)
            }
        }
    }
    
    return seatCount
    
    
    function search(row, col, seats){
        let tmp = 0
        seats[row][col] = 'X'
        for(let dir of dirs) {
            let x = row + dir[0]
            let y = col + dir[1]
            if(x < 0 || y < 0 || x >= height || y >= width ) continue;
            if(seats[x][y] === '.') seats[x][y] = '#'
        }

        for(let r = 0; r < seats.length; r++){
            for (let c = 0; c < seats[0].length; c++){
                if(seats[r][c] === '.'){
                    if(checkValid(r, c, seats)){
                        banSeat(r,c, seats)
                        seats[r][c] = 'X'
                    }
                }
            }
        }
        
        for(let r = 0; r < height; r++){
            for(let c = 0; c < width; c++){
                if(seats[r][c] === 'X') tmp++
            }
        }
        
        return tmp
    }
    
    function checkValid(row, col, seats){
        for(let dir of dirs) {
            let x = row + dir[0]
            let y = col + dir[1]
            if(x < 0 || y < 0 || x >= height || y >= width ) continue;
            if(seats[x][y] === 'X') return false
        }
        
        return true;
    }
    
    function banSeat(row, col, seats){
        for(let dir of dirs) {
            let x = row + dir[0]
            let y = col + dir[1]
            if(x < 0 || y < 0 || x >= height || y >= width ) continue;
            seats[x][y] = '#'
        }
    }
    
    function copy(){
        const tmp = []
        
        for(let r = 0; r < height; r++){
            tmp.push([])
            tmp[r].push(...seats[r])
        }
        
        return tmp
    }
};
