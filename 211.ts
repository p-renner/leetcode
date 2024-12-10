class TrieNode {
	children: Array<TrieNode>;
	score: number;
	constructor() {
		this.children = new Array<TrieNode>(26);
		this.score = 0;
	}
}

class WordDictionary {
	root: TrieNode;

	constructor() {
		this.root = new TrieNode();
	}

	addWord(word: string): void {
		let curr = this.root;

		for (const c of word) {
			const i = c.charCodeAt(0) - 97;

			if (!curr.children[i]) {
				curr.children[i] = new TrieNode();
			}

			curr = curr.children[i];
		}

		curr.score += 1;
	}

	search(word: string): boolean {
		return this.searchFrom(word, this.root);
	}

	searchFrom(word: string, root: TrieNode): boolean {
		if (word.length == 0) {
			return root.score > 0;
		}

		if (word[0] == '.') {
			for (const child of root.children) {
				if (child && this.searchFrom(word.slice(1), child)) {
					return true;
				}
			}
		} else {
			const i = word[0].charCodeAt(0) - 97;

			if (root.children[i]) {
				return this.searchFrom(word.slice(1), root.children[i]);
			}
		}

		return false;
	}
}

test('WordDictionary', () => {
	let obj = new WordDictionary();
	obj.addWord('bad');
	obj.addWord('dad');
	obj.addWord('mad');
	expect(obj.search('pad')).toBe(false);
	expect(obj.search('bad')).toBe(true);
	expect(obj.search('.ad')).toBe(true);
	expect(obj.search('b..')).toBe(true);
	expect(obj.search('a')).toBe(false);
	expect(obj.search('b')).toBe(false);
	expect(obj.search('ba')).toBe(false);

	let obj2 = new WordDictionary();
	obj2.addWord('at');
	obj2.addWord('and');
	obj2.addWord('an');
	obj2.addWord('add');
	expect(obj2.search('a')).toBe(false);
	expect(obj2.search('.at')).toBe(false);
	obj2.addWord('bat');
	expect(obj2.search('.at')).toBe(true);
	expect(obj2.search('an.')).toBe(true);
	expect(obj2.search('a.d.')).toBe(false);
	expect(obj2.search('b.')).toBe(false);
	expect(obj2.search('a.d')).toBe(true);
	expect(obj2.search('.')).toBe(false);
});
