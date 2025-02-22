import { TreeNode, treeFromArr } from './utils/treenode';

function recoverFromPreorder(traversal: string): TreeNode | null {
	function parseString(s: string) {
		const res: [number, number][] = [];
		let lastSeen: '-' | 'number' = '-';
		let dashCount = 0;
		let num = 0;

		for (let i = 0; i < s.length; i++) {
			if (s[i] === '-' && lastSeen === 'number') {
				res.push([num, dashCount]);
				num = 0;
				dashCount = 0;
			}

			if (s[i] === '-') {
				dashCount++;
				lastSeen = '-';
				continue;
			}

			num = num * 10 + parseInt(s[i]);
			lastSeen = 'number';
		}

		res.push([num, dashCount]);
		return res;
	}

	const parsed = parseString(traversal);
	const root = new TreeNode(parsed[0][0]);
	const stack: [TreeNode, number][] = [[root, 0]];

	for (let i = 1; i < parsed.length; i++) {
		const [num, depth] = parsed[i];
		const node = new TreeNode(num);

		while (stack[stack.length - 1][1] !== depth - 1) {
			stack.pop();
		}

		const parent = stack[stack.length - 1][0];

		if (!parent.left) {
			parent.left = node;
		} else {
			parent.right = node;
		}

		stack.push([node, depth]);
	}

	return root;
}

test('recoverFromPreorder', () => {
	expect(recoverFromPreorder('1-2--3--4-5--6--7')).toStrictEqual(treeFromArr([1, 2, 5, 3, 4, 6, 7]));
	expect(recoverFromPreorder('1-2--3---4-5--6---7')).toStrictEqual(
		treeFromArr([1, 2, 5, 3, null, 6, null, 4, null, 7]),
	);
	expect(recoverFromPreorder('1-401--349---90--88')).toStrictEqual(treeFromArr([1, 401, null, 349, 88, 90]));
});
