import { _Node, treeFromArr } from './utils/ntreenode';

function postorder(root: _Node | null): number[] {
	const res: number[] = [];
	let queue: _Node[] = [root];

	if (!root) {
		return res;
	}

	while (queue.length > 0) {
		const curr = queue.pop();
		res.unshift(curr.val);
		queue = queue.concat(curr.children);
	}

	return res;
}

test('postorder', () => {
	expect(postorder(treeFromArr([1, null, 3, 2, 4, null, 5, 6]))).toStrictEqual([5, 6, 3, 2, 4, 1]);
});
