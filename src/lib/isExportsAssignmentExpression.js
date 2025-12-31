module.exports = (node) =>
  node.type === 'AssignmentExpression' &&
  node.left.type === 'MemberExpression' &&
  node.left.object.type === 'Identifier' &&
  node.left.object.name === 'exports'
