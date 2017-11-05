const path = require('path')

module.exports = {
  modules: [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'node_modules')],
  extensions: ['.js'],
  alias: {
    _components: path.resolve(__dirname, '..', 'src/components/'),
    _views: path.resolve(__dirname, '..', 'src/views/'),
  },
}
