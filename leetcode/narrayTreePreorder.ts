//  Definition for _Node.
class _Node {
  val: number;
  children: _Node[];

  constructor(val?: number, children?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function preOrder(root: _Node | null): number[] {
  if (!root) return [];
  const result: number[] = [];

  const depthFirstPreOrder = (node: _Node): void => {
    if (!node) return;
    result.push(node.val);
    node.children.forEach(child => depthFirstPreOrder(child));
  };

  depthFirstPreOrder(root);

  return result;
}
