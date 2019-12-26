/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let cur = head;
  const queue = [head];
  while(cur) {
      cur = cur.next;
      queue.push(cur);
      if (queue.length > (n + 2)) {
          queue.shift();
      }
  }
  if (queue.length < n + 2) {
      return queue[1]
  }
  queue[0].next = queue[2];
  return head;
};