const Seneca = require('seneca')
const Express = require('express')
const Path = require('path')


const seneca = Seneca()


seneca.ready(() => {
  const app = Express()


  app.use(Express.json())


  const VIEWS_PATH = Path.join(__dirname, '..', './views/')
  app.use(Express.static(VIEWS_PATH))


  app.get('/', (req, res) => {
    const index = Path.join(VIEWS_PATH, 'index.html')
    return res.sendFile(index)
  })


  app.post('/api', (req, res) => {
    return res.json({
      /* NOTE: meta$.empty == false is required, or else the client receives
       * null instead of the response data.
       */
      meta$: { empty: false },

      message: 'hello from the backend'
    })
  })


  app.listen(process.env.PORT || 9000)
})

