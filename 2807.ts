import { ListNode, listFromArr } from './utils/listnode';

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
	let curr = head;

	while (curr && curr.next) {
		const tmp = curr.next;
		curr.next = new ListNode(gcd(curr.val, curr.next.val), tmp);
		curr = tmp;
	}

	return head;
}

function gcd(a: number, b: number) {
	if (!b) {
		return a;
	}

	return gcd(b, a % b);
}

test('insertGreatestCommonDivisors', () => {
	expect(insertGreatestCommonDivisors(listFromArr([18, 6, 10, 3]))).toStrictEqual(
		listFromArr([18, 6, 6, 2, 10, 1, 3]),
	);
	expect(insertGreatestCommonDivisors(listFromArr([7]))).toStrictEqual(listFromArr([7]));
});
