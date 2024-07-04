import { ListNode, listFromArr } from './utils/listnode';

function mergeNodes(head: ListNode | null): ListNode | null {
	if (!head) return null;
	let curr = head.next;
	let sum = 0;
	let newHead = new ListNode();
	let newCurr = newHead;

	while (curr) {
		sum += curr.val;

		if (curr.val == 0) {
			newCurr.next = new ListNode(sum);
			sum = 0;
			newCurr = newCurr.next;
		}
		curr = curr.next;
	}

	return newHead.next;
}

test('mergeNodes', () => {
	expect(mergeNodes(listFromArr([0, 3, 1, 0, 4, 5, 2, 0]))).toEqual(listFromArr([4, 11]));
	expect(mergeNodes(listFromArr([0, 1, 0, 3, 0, 2, 2, 0]))).toEqual(listFromArr([1, 3, 4]));
});
