import { ListNode, listFromArr } from './utils/listnode';

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
	if (!head) {
		return [-1, -1];
	}

	let min = -1;
	let max = -1;
	const res = [Infinity, -1];

	while (head.next && head.next.next) {
		if (
			!(head.next.val > head.val && head.next.val > head.next.next.val) &&
			!(head.next.val < head.val && head.next.val < head.next.next.val)
		) {
			if (max > -1) {
				max++;
			}

			min++;
			head = head?.next;
			continue;
		}

		if (max == -1) {
			max = 0;
			min = 0;
			head = head?.next;
			continue;
		}

		max++;
		res[0] = Math.min(++min, res[0]);
		res[1] = max;
		min = 0;
		head = head?.next;
	}

	if (res[1] == -1) {
		return [-1, -1];
	}

	return res;
}

test('nodesBetweenCriticalPoints', () => {
	expect(nodesBetweenCriticalPoints(listFromArr([3, 1]))).toStrictEqual([-1, -1]);
	expect(nodesBetweenCriticalPoints(listFromArr([5, 3, 1, 2, 5, 1, 2]))).toStrictEqual([1, 3]);
	expect(nodesBetweenCriticalPoints(listFromArr([1, 3, 2, 2, 3, 2, 2, 2, 7]))).toStrictEqual([3, 3]);
});
