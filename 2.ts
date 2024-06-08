import { ListNode, listFromArr } from './utils/listnode';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const head = new ListNode();
	let addOne = false;
	let curr = head;

	while (l1 || l2 || addOne) {
		curr.next = new ListNode();
		curr = curr.next;

		const sum = (l1?.val || 0) + (l2?.val || 0) + (addOne ? 1 : 0);
		curr.val = sum % 10;
		addOne = sum > 9;

		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}

	return head.next;
}

test('addTwoNumbers', () => {
	expect(addTwoNumbers(listFromArr([2, 4, 3]), listFromArr([5, 6, 4]))).toEqual(listFromArr([7, 0, 8]));
	expect(addTwoNumbers(listFromArr([0]), listFromArr([0]))).toEqual(listFromArr([0]));
	expect(addTwoNumbers(listFromArr([9, 9, 9, 9, 9, 9, 9]), listFromArr([9, 9, 9, 9]))).toEqual(
		listFromArr([8, 9, 9, 9, 0, 0, 0, 1]),
	);
});
