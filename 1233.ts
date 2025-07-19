function removeSubfolders(folder: string[]): string[] {
	const set = new Set(folder);
	let res: string[] = [];

	for (const dir of folder) {
		const folders = dir.matchAll(/\/\w+/g);
		let subF = '';

		for (const f of folders) {
			subF += f[0];

			if (subF == f.input) {
				res.push(subF);
			}

			if (set.has(subF)) {
				break;
			}
		}
	}

	return res;
}

test('removeSubfolders', () => {
	expect(removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'])).toStrictEqual(['/a', '/c/d', '/c/f']);
	expect(removeSubfolders(['/a', '/a/b/c', '/a/b/d'])).toStrictEqual(['/a']);
	expect(removeSubfolders(['/a/b/c', '/a/b/ca', '/a/b/d'])).toStrictEqual(['/a/b/c', '/a/b/ca', '/a/b/d']);
});
