/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = []

    for (let i = 0; i < num.length; i++) {
        let curr = num[i]
        while (stack.length && k && stack[stack.length - 1] > curr) {
            stack.pop()
            k--
        }
        stack.push(curr)
    }
    
    //Trim the front of 0's
    let front = 0;
    while(stack[front] == 0) front++
    stack = stack.slice(front)
    
    //Trim the back if k > 0
    while (k--) stack.pop()
    return stack.length ? stack.join('') : '0'
};

//Code golf - 158 chars
var removeKdigits=([...n],k,i=0)=>{while(i<n.length&&k)n[i]>n[i+1]?n.splice(i--,1)&k--:i++;while(k--)n.pop();while(n[0]=='0')n.shift();return n.join('')||'0'}
