import { ListNode, listFromArr } from './utils/listnode';

function oddEvenList(head: ListNode | null): ListNode | null {
	if (!head) {
		return null;
	}

	let lastOdd = head;

	while (lastOdd && lastOdd.next && lastOdd.next.next) {
		lastOdd = lastOdd.next.next;
	}
	const lastEven = lastOdd.next;
	let even = lastOdd;

	let odd = head;
	while (odd != lastOdd) {
		even.next = odd.next;
		even = even.next;

		odd.next = odd.next.next;
		odd = odd.next;
	}

	if (lastEven) {
		even.next = lastEven;
		even.next.next = null;
	} else {
		even.next = null;
	}

	return head;
}

test('oddEvenList', () => {
	expect(oddEvenList(listFromArr([1, 2, 3, 4, 5]))).toStrictEqual(listFromArr([1, 3, 5, 2, 4]));
	expect(oddEvenList(listFromArr([2, 1, 3, 5, 6, 4, 7]))).toStrictEqual(listFromArr([2, 3, 6, 7, 1, 5, 4]));
});
