const Seneca = require('seneca')
const Express = require('express')


function makeApi(app) {
  const seneca = Seneca()

  seneca.ready(() => {
    app.post('/api', (req, res) => {
      return res.json({
        /* NOTE: meta$.empty == false is required, or else the client receives
         * null instead of the response data.
         */
        meta$: { empty: false },

        message: 'hola from the backend'
      })
    })
  })
}


module.exports = makeApi
