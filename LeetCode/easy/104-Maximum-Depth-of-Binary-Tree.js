// 104. Maximum Depth of Binary Tree
var maxDepth = function (root) {
  if (!root) return 0;
  let LD = maxDepth(root.left);
  let RD = maxDepth(root.right);
  return Math.max(LD, RD) + 1;
};
