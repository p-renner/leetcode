function removeSubfolders(folder: string[]): string[] {
	folder.sort();
	const res: string[] = [folder[0]];
	let last = folder[0];

	for (let p1 = 1; p1 < folder.length; p1++) {
		if (folder[p1].startsWith(last) && folder[p1][last.length] == '/') {
			continue;
		}

		last = folder[p1];
		res.push(folder[p1]);
	}

	return res;
}

test('removeSubfolders', () => {
	expect(removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'])).toStrictEqual(['/a', '/c/d', '/c/f']);
	expect(removeSubfolders(['/a', '/a/b/c', '/a/b/d'])).toStrictEqual(['/a']);
	expect(removeSubfolders(['/a/b/c', '/a/b/ca', '/a/b/d'])).toStrictEqual(['/a/b/c', '/a/b/ca', '/a/b/d']);
});
