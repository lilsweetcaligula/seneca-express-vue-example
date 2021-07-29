<template>
  <div id="app">
    <h1>Hello world!</h1>
  </div>
</template>

<script>
import Seneca from 'seneca-browser'

const seneca = new Seneca({
  plugin: { browser: { endpoint: '/api' } }
})

seneca.client({
  type: 'browser', pin: 'role:web'
})

export default {
  name: 'App',

  mounted() {
    seneca.act('role:web,hello:world', function (err, out) {
      if (err) {
        console.error(err)
        return
      }

      console.dir('Backend responded with: ')
      console.dir(out)
    })
  }
}
</script>
