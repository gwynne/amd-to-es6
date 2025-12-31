const isDefineWithReferenceToWrappingIIFEFunction = require('../lib/isDefineWithReferenceToWrappingIIFEFunction')

module.exports = (node, body) => {
  const length = node?.arguments?.length
  return isDefineWithReferenceToWrappingIIFEFunction(node, body) || (
        length >= 2 &&
        node &&
        node.callee &&
        node.callee.type === 'Identifier' &&
        node.callee.name === 'define' &&
        node.arguments[length - 2].type === 'ArrayExpression' &&
        (
          node.arguments[length - 1].type === 'FunctionExpression' ||
            node.arguments[length - 1].type === 'ArrowFunctionExpression'
        )
      )
}
