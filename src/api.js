const Seneca = require('seneca')
const Express = require('express')


function makeApi(app) {
  const seneca = Seneca()

  seneca.ready(() => {
    app.use(Express.json())

    /* WARNING: This API is not exclusive to the frontend app. Anyone who can
     * reach the frontend app, can reach this API. Please keep that in mind
     * and make sure that non-public APIs keep unauthenticated/unauthorized
     * users out.
     */
    app.post('/api', (req, res) => {
      const msg = req.body
      const greeting = `Hey, ${msg.name || 'stranger'}!`

      return res.json({
        /* NOTE: meta$.empty == false is required, or else the client receives
         * null instead of the response data.
         */
        meta$: { empty: false },

        message: greeting
      })
    })
  })
}


module.exports = makeApi
