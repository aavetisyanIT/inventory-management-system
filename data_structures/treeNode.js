export class TreeNode {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	addChild(child) {
		if (child instanceof TreeNode) {
			this.children.push(child);
			return;
		}
		this.children.push(new TreeNode(child));
	}

	removeChild(childToRemove) {
		const length = this.children.length;
		this.children = this.children.filter(child => {
			if (childToRemove instanceof TreeNode) {
				return childToRemove !== child;
			}
			return child.data !== childToRemove;
		});

		if (length === this.children.length) {
			this.children.forEach(child => child.removeChild(childToRemove));
		}
	}

	depthFirstTraversal() {
		console.log(this.data);
		this.children(child => child.depthFirstTraversal());
	}

	breadthFirstTraversal() {
		let queue = [this];

		while (queue.length) {
			const current = queue.shift();
			console.log(current.data);
			queue.push(...current.children);
		}
	}
}
