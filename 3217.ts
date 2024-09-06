import { ListNode, listFromArr } from './utils/listnode';

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
	if (!head) {
		return null;
	}

	const numsSet = new Set(nums);

	while (numsSet.has(head.val)) {
		head = head.next;
	}

	let prev = head;
	let curr = head.next;

	while (curr) {
		if (numsSet.has(curr.val)) {
			prev.next = prev.next.next;
			curr = prev.next;
			continue;
		}

		prev = curr;
		curr = curr.next;
	}

	return head;
}

test('modifiedList', () => {
	expect(modifiedList([1, 2, 3], listFromArr([1, 2, 3, 4, 5]))).toStrictEqual(listFromArr([4, 5]));
	expect(modifiedList([1], listFromArr([1, 2, 1, 2, 1, 2]))).toStrictEqual(listFromArr([2, 2, 2]));
});
