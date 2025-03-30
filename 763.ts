function partitionLabels(s: string): number[] {
	const last = new Map<string, number>();

	for (let i = 0; i < s.length; i++) {
		last.set(s[i], i);
	}

	const partitions: number[] = [];
	let start = 0;
	let end = 0;

	for (let i = 0; i < s.length; i++) {
		end = Math.max(end, last.get(s[i])!);

		if (i === end) {
			partitions.push(end - start + 1);
			start = i + 1;
		}
	}

	return partitions;
}

test('partitionLabels', () => {
	expect(partitionLabels('ababcbacadefegdehijhklij')).toEqual([9, 7, 8]);
	expect(partitionLabels('eccbbbbdec')).toEqual([10]);
});
