module.exports = (node, body) =>
    node?.callee &&
    node.callee.type === 'Identifier' &&
    node.callee.name === 'define' &&
    node.arguments.length === 2 &&
    node.arguments[0].type === "ArrayExpression" &&
    node.arguments[1].type === "Identifier" &&
    body.length === 1 &&
    body[0].type === "ExpressionStatement" &&
    body[0].expression.type === "CallExpression" &&
    (body[0].expression.callee.type === "FunctionExpression" || body[0].expression.callee.type === "ArrowFunctionExpression") &&
    body[0].expression.callee.params.length === 1 &&
    body[0].expression.callee.params[0].type === "Identifier" &&
    body[0].expression.callee.params[0].name === node.arguments[1].name &&
    body[0].expression.arguments.length === 1 &&
    (body[0].expression.arguments[0].type === "FunctionExpression" || body[0].expression.arguments[0].type === "ArrowFunctionExpression")
