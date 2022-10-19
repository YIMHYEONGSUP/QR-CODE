<template>

  <div id="app">
    <h2> QR CODE </h2>

    <QrCode></QrCode>
    <QrCapture></QrCapture>
  </div>

</template>

<script>
import QrCode from './components/QrCode.vue'
import QrCapture from './components/QrCapture.vue'

export default {
  name: 'App',
  components: {
    QrCode,
    QrCapture
  }
}
</script>

<style>

</style>