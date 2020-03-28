//https://leetcode.com/problems/cinema-seat-allocation/

/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const seats = new Map();
    for (res of reservedSeats) {
        if (!seats.has(res[0])) {
            seats.set(res[0], new Set());
        }
        seats.get(res[0]).add(res[1]);
    }
    
    let ans = n * 2;
    seats.forEach(row => {
        let empty = 0;
        let free = 2;
        for (let col = 2; col < 10; col++) {
            if (row.has(col)) {
                empty = 0;
                continue;
            }
            
            //If the family's seats end at 6 or 8 they are separated by an aisle which is not allowed
            if (++empty >= 4 && col !== 6 && col !== 8) {
                empty = 0;
                free--; 
            }
        }

        ans -= free;
    })
    return ans;
};
