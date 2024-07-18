import { TreeNode, treeFromArr } from './utils/treenode';

function countPairs(root: TreeNode | null, distance: number): number {
	const graph: Map<TreeNode, TreeNode> = new Map();
	const stack: TreeNode[] = [];
	const leaves: Set<TreeNode> = new Set();
	const result: number[] = [];

	let current = root;

	while (current !== null || stack.length > 0) {
		while (current !== null) {
			if (current.left === null && current.right === null) {
				leaves.add(current);
			}
			stack.push(current);
			if (current.left) {
				graph.set(current.left, current);
			}
			current = current.left;
		}

		current = stack.pop()!;
		result.push(current.val);
		if (current.right) {
			graph.set(current.right, current);
		}
		current = current.right;
	}

	let count = 0;
	for (const leaf of leaves) {
		if (!graph.has(leaf)) {
			continue;
		}

		const stack: [TreeNode, TreeNode, number][] = [[graph.get(leaf), leaf, 1]];

		while (stack.length > 0) {
			const [node, parent, dist] = stack.pop()!;

			if (!node.left && !node.right) {
				count++;
			}

			if (dist == distance) {
				continue;
			}

			if (node.left != null && node.left != parent) {
				stack.push([node.left, node, dist + 1]);
			}

			if (node.right != null && node.right != parent) {
				stack.push([node.right, node, dist + 1]);
			}

			if (graph.has(node)) {
				const tmp = graph.get(node);
				if (tmp != parent) {
					stack.push([tmp, node, dist + 1]);
				}
			}
		}
	}

	return count / 2;
}

test('countPairs', () => {
	expect(countPairs(treeFromArr([1, 2, 3, null, 4]), 3)).toBe(1);
	expect(countPairs(treeFromArr([1, 2, 3, 4, 5, 6, 7]), 3)).toBe(2);
	expect(countPairs(treeFromArr([7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2]), 3)).toBe(1);
	expect(countPairs(treeFromArr([100]), 3)).toBe(0);
});
