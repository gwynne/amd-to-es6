const getImportDeclaration = require('./getImportDeclaration')

module.exports = (dependencies, options) => dependencies.filter((dependency) => {
    return dependency.element !== 'require' && dependency.element !== 'exports'
  }).map((dependency) => {
    return getImportDeclaration(dependency.element, dependency.param, options)
  })
