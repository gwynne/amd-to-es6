module.exports = (node) => {
  const length = node?.arguments?.length
  return (node.arguments[length - 1].type === "FunctionExpression" || node.arguments[length - 1].type === "ArrowFunctionExpression") && node.arguments[length - 1].params.map(param => param.name).indexOf('exports') >= 0
}
