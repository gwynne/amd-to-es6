const isDefineWithReferenceToWrappingIIFEFunction = require('../lib/isDefineWithReferenceToWrappingIIFEFunction')

module.exports = (node, body) =>
    isDefineWithReferenceToWrappingIIFEFunction(node, body) ?
        body[0].expression.arguments[body[0].expression.arguments.length - 1] :
        node.arguments[node.arguments.length - 1]
