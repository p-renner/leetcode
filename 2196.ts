import { TreeNode, treeFromArr } from './utils/treenode';

function createBinaryTree(descriptions: number[][]): TreeNode | null {
	const nodes = new Map<number, TreeNode>();
	const children = new Set();

	for (const [parent, child, isLeft] of descriptions) {
		const parentNode = nodes.get(parent) || new TreeNode(parent);
		const childNode = nodes.get(child) || new TreeNode(child);

		if (isLeft) {
			parentNode.left = childNode;
		} else {
			parentNode.right = childNode;
		}

		nodes.set(parent, parentNode);
		nodes.set(child, childNode);
		children.add(child);
	}

	return nodes.get(Array.from(nodes.keys()).find((val) => !children.has(val)));
}

test('createBinaryTree', () => {
	expect(
		createBinaryTree([
			[20, 15, 1],
			[20, 17, 0],
			[50, 20, 1],
			[50, 80, 0],
			[80, 19, 1],
		]),
	).toStrictEqual(treeFromArr([50, 20, 80, 15, 17, 19]));
});
