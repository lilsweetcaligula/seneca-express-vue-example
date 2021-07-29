<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import Seneca from 'seneca-browser'

const seneca = new Seneca({
  plugin: { browser: { endpoint: '/api' } }
})

seneca.client({ type: 'browser', pin: ['role:web'] })

export default {
  name: 'App',

  data: () => ({
    message: ''
  }),

  mounted() {
    const self = this

    seneca.act('role:web,hello:world', { name: 'Bob' }, function (err, out) {
      if (err) {
        console.error(err)
        return
      }

      self.message = out.message
    })
  }
}
</script>
