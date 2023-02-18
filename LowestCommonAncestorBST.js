/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  while (root) {
    // traverse right
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    }
    // traverse left
    else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      break;
    }
  }
  // if we cannot go further we have found the lowest common ancestor.
  return root;
};
