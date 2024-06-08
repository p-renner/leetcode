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
