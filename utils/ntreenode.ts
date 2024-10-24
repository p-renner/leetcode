export class _Node {
	val: number;
	children: _Node[];
	constructor(val?: number) {
		this.val = val === undefined ? 0 : val;
		this.children = [];
	}
}

export function treeFromArr(arr: Array<number | null>): _Node | null {
	if (arr.length === 0) return null;
	const root = new _Node(arr.shift()!);
	const queue = [root];
	arr.shift();

	while (arr.length > 0 && queue.length > 0) {
		const current = queue.shift()!;
		let val = arr.shift();

		while (val) {
			const node = new _Node(val);
			current.children.push(node);
			queue.push(node);
			val = arr.shift();
		}
	}

	return root;
}
