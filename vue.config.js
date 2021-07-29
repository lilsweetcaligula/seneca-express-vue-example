const makeApi = require('./src/api')

module.exports = {
  devServer: {
    before: makeApi
  }
}
