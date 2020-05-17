/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var oddEvenList = function(head) {
    if (!head) return null 
    
    let odd = head;
    let even = head.next;
    const evenhead = even

    while (even && even.next) {
        odd.next = even.next;
        even.next = even.next.next;

        odd = odd.next;
        even = even.next;
    }

    odd.next = evenhead;

    return head;
};

//Code golf - 116
var oddEvenList=(h,n='next',o=h,E=e=h&&h[n])=>{while(e&&e[n]){o[n]=e[n];o=o[n];e[n]=o[n];e=e[n]}h?o[n]=E:0;return h}
