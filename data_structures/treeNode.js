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
}
