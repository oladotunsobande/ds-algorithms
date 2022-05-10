function TrieNode() {
	this.children = {};
	this.endOfWord = false;
}

function Trie() {
	this.root = new TrieNode();
}

Trie.prototype.insert = function(word) {
	let current = this.root;

	for (let i = 0; i < word.length; i++) {
		let chr = word.charAt(i);
		let node = current.children[chr];

		if (!node) {
			node = new TrieNode();
			current.children[chr] = node;
		}

		current = node;
	}

	current.endOfWord = true;
}

const trie = new Trie();
trie.insert('oladotun');