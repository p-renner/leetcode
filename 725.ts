import { ListNode, listFromArr } from './utils/listnode';

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
	const n = count(head);
	const per = Math.floor(n / k);
	const extra = n % k;
	const list = new Array(k).fill(null);
	let curr = head;

	for (let i = 0; i < extra; i++) {
		list[i] = curr;

		for (let j = 0; j < per; j++) {
			curr = curr?.next;
		}

		if (curr) {
			const tmp = curr.next;
			curr.next = null;
			curr = tmp;
		}
	}

	for (let i = 0; i < k - extra; i++) {
		list[i + extra] = curr;

		for (let j = 0; j < per - 1; j++) {
			curr = curr?.next;
		}

		if (curr) {
			const tmp = curr.next;
			curr.next = null;
			curr = tmp;
		}
	}

	return list;
}

function count(head: ListNode | null): number {
	let count = 0;
	let curr = head;

	while (curr) {
		count++;
		curr = curr.next;
	}

	return count;
}

test('splitListToParts', () => {
	expect(splitListToParts(listFromArr([1, 2, 3]), 5)).toStrictEqual([
		listFromArr([1]),
		listFromArr([2]),
		listFromArr([3]),
		null,
		null,
	]);
	expect(splitListToParts(listFromArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3)).toStrictEqual([
		listFromArr([1, 2, 3, 4]),
		listFromArr([5, 6, 7]),
		listFromArr([8, 9, 10]),
	]);
});
