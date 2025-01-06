function minOperations(boxes: string): number[] {
	const n = boxes.length;
	const left = new Array(n + 1).fill(0);
	let count = 0;

	for (let i = 0; i < boxes.length; i++) {
		left[i + 1] = left[i] + count;
		count += boxes[i] == '1' ? 1 : 0;
	}

	count = 0;
	const right = new Array(n + 1).fill(0);

	for (let i = n - 1; i >= 0; i--) {
		right[i] = right[i + 1] + count;
		count += boxes[i] == '1' ? 1 : 0;
	}

	left.shift();
	return left.map((num, i) => num + right[i]);
}

test('minOperations', () => {
	expect(minOperations('110')).toStrictEqual([1, 1, 3]);
	expect(minOperations('001011')).toStrictEqual([11, 8, 5, 4, 3, 4]);
});
