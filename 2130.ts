import { ListNode, listFromArr } from './utils/listnode';

function pairSum(head: ListNode | null): number {
	let slow = head;
	let fast = head?.next;

	while (fast && fast.next) {
		slow = slow!.next;
		fast = fast.next.next;
	}

	let max = 0;
	let prev: ListNode | null = null;

	while (slow) {
		let tmp = slow.next;
		slow.next = prev;
		prev = slow;
		slow = tmp;
	}

	fast = head;

	while (prev.next) {
		max = Math.max(max, fast.val + prev.val);

		prev = prev.next;
		fast = fast.next;
	}

	return max;
}

test('pairSum', () => {
	expect(pairSum(listFromArr([5, 4, 2, 1]))).toBe(6);
	expect(pairSum(listFromArr([4, 2, 2, 3]))).toBe(7);
	expect(pairSum(listFromArr([1, 100000]))).toBe(100001);
});
