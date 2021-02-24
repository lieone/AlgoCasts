// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let fast = list.getFirst();
  let slow = fast;
  let counter = 0;
  while (fast) {
    fast = fast.next;
    if (counter > n) {
      slow = slow.next;
    } else {
      counter += 1;
    }
  }
  return slow;
}

module.exports = fromLast;
