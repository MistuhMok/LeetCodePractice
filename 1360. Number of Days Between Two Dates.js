//https://leetcode.com/problems/number-of-days-between-two-dates/

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let leapYears = (y, m) => {
        if (m <= 2) --y; // Don't count current year if month is Jan/Feb
        
        // A year is a leap year if it is a multiple of 4, 
        // multiple of 400 and not a multiple of 100.
        return Math.floor(y / 400) + Math.floor(y / 4) - Math.floor(y / 100);
    };
    
    //Calculate number of days up to that month
    let monthDays = [0, 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    for (let i = 1; i < monthDays.length; ++i)
        monthDays[i] += monthDays[i - 1];
        
    let days = (y, m, d) => (y * 365) + leapYears(y, m) + monthDays[m] + d;
    let num1 = days(...date1.split('-').map(Number)),
        num2 = days(...date2.split('-').map(Number));
    return Math.abs(num1 - num2);
};
