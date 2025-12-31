const isDefineWithFunctionExpression = require('./isDefineWithFunctionExpression')
const isDefineWithArrayAndCallback = require('./isDefineWithArrayAndCallback')

module.exports = (node, body) =>
  isDefineWithFunctionExpression(node) ||
  isDefineWithArrayAndCallback(node, body)
