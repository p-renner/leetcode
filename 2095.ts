import { ListNode } from './utils/listnode';

function deleteMiddle(head: ListNode | null): ListNode | null {
	if (!head || !head.next) {
		return null;
	}

	let rabbit = head;
	let turtle = head;

	while (rabbit && rabbit.next) {
		rabbit = rabbit.next.next;

		if (rabbit?.next) {
			turtle = turtle.next;
		}
	}

	if (turtle.next) {
		turtle.next = turtle.next.next;
	}

	return head;
}
