export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function listFromArr(arr: number[]): ListNode {
	const head = new ListNode();
	let current = head;
	for (const val of arr) {
		current.next = new ListNode(val);
		current = current.next;
	}
	return head.next!;
}

export function arrFromList(head: ListNode): number[] {
	const seen = new Set<ListNode>();

	let curr = head;
	while (curr) {
		if (seen.has(curr)) {
			seen.add(new ListNode(curr.val));
			break;
		}

		seen.add(curr);
		curr = curr.next;
	}

	return Array.from(seen).map((node) => node.val);
}
