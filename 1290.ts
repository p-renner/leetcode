import { ListNode, listFromArr } from './utils/listnode';

function getDecimalValue(head: ListNode | null): number {
	let curr = head;
	let res = curr.val;

	while (curr.next) {
		curr = curr.next;
		res = (res << 1) | curr.val;
	}

	return res;
}

test('getDecimalValue', () => {
	expect(getDecimalValue(listFromArr([1, 0, 1]))).toBe(5);
	expect(getDecimalValue(listFromArr([0]))).toBe(0);
});
