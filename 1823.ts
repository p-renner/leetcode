import { ListNode } from './utils/listnode';

function findTheWinner(n: number, k: number): number {
	const head = new ListNode(1);
	let curr = head;

	for (let i = 2; i <= n; i++) {
		curr.next = new ListNode(i);
		curr = curr.next;
	}
	curr.next = head;

	while (curr.next != curr) {
		for (let i = 1; i < k; i++) {
			curr = curr.next;
		}
		curr.next = curr.next.next;
	}

	return curr.val;
}

test('findTheWinner', () => {
	expect(findTheWinner(5, 2)).toBe(3);
	expect(findTheWinner(6, 5)).toBe(1);
});
