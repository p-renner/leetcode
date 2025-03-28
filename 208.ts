class Trienode {
	children: Array<Trienode>;
	score: number;

	constructor() {
		this.children = new Array<Trienode>(26);
		this.score = 0;
	}
}

class Trie {
	head: Trienode;

	constructor() {
		this.head = new Trienode();
	}

	insert(word: string): void {
		const chars = word.split('');
		let curr: Trienode = this.head;

		for (const char of chars) {
			const index = char.charCodeAt(0) - 97;
			if (!curr.children[index]) {
				curr.children[index] = new Trienode();
			}

			curr = curr.children[index];
		}

		curr.score++;
	}

	search(word: string): boolean {
		const chars = word.split('');
		let curr: Trienode = this.head;

		for (const char of chars) {
			const index = char.charCodeAt(0) - 97;

			if (!curr.children[index]) {
				return false;
			}

			curr = curr.children[index];
		}

		return curr.score >= 1;
	}

	startsWith(prefix: string): boolean {
		const chars = prefix.split('');
		let curr: Trienode = this.head;

		for (const char of chars) {
			const index = char.charCodeAt(0) - 97;

			if (!curr.children[index]) {
				return false;
			}

			curr = curr.children[index];
		}

		return true;
	}
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
