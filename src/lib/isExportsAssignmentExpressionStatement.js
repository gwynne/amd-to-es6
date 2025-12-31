const isExportsAssignmentExpression = require('./isExportsAssignmentExpression')

module.exports = (node) =>
  node.type === 'ExpressionStatement' &&
  isExportsAssignmentExpression(node.expression)
