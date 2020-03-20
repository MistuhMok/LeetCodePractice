//https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head
    let prev
    let carry = 0
    
    while(l1 || l2 || carry){
        let l1val = l1 ? l1.val : 0
        let l2val = l2 ? l2.val : 0
        
        let sum = l1val + l2val + carry
        carry = 0
        if(sum > 9) {
            sum %= 10
            carry = 1
        }
        
        let tmp = new ListNode(sum)
        if(!prev && !head){
            head = tmp
            prev = tmp
        }
        else prev.next = tmp
        prev = tmp
        
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    
    
    return head
}
