export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

export function treeFromArr(arr: Array<number | null>): TreeNode | null {
	if (arr.length === 0) return null;
	const root = new TreeNode(arr[0]!);
	const queue = [root];
	let i = 1;
	while (i < arr.length) {
		const current = queue.shift()!;
		const left = arr[i++];
		if (left !== null) {
			current.left = new TreeNode(left);
			queue.push(current.left);
		}

		const right = arr[i++];
		if (right !== null) {
			current.right = new TreeNode(right);
			queue.push(current.right);
		}
	}

	return root;
}
