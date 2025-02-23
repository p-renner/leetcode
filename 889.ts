import { TreeNode, treeFromArr } from './utils/treenode';

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
	if (preorder.length === 0) {
		return null;
	}

	const root = new TreeNode(preorder[0]);

	if (preorder.length === 1) {
		return root;
	}

	const leftRoot = preorder[1];
	const leftRootIndex = postorder.indexOf(leftRoot);
	const leftPreorder = preorder.slice(1, leftRootIndex + 2);
	const leftPostorder = postorder.slice(0, leftRootIndex + 1);

	root.left = constructFromPrePost(leftPreorder, leftPostorder);
	const rightPreorder = preorder.slice(leftRootIndex + 2);
	const rightPostorder = postorder.slice(leftRootIndex + 1, postorder.length - 1);
	console.log('leftPreorder', leftPreorder);
	console.log('leftPostorder', leftPostorder);
	console.log('rightPreorder', rightPreorder);
	console.log('rightPostorder', rightPostorder);

	root.right = constructFromPrePost(rightPreorder, rightPostorder);

	return root;
}

test('constructFromPrePost', () => {
	expect(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1])).toStrictEqual(
		treeFromArr([1, 2, 3, 4, 5, 6, 7]),
	);
	expect(constructFromPrePost([1], [1])).toStrictEqual(treeFromArr([1]));
});
