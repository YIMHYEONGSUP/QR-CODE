<template>

  <div id="app">

    <h2> QR CODE </h2>

    <CreateQrcode/>

    <QrCode></QrCode>

    <hr>

    <QrDecoder />

    <hr>

    <QrCapture></QrCapture>

    <hr>
    반복 가능 
    <RepeatableQrcode/>

  </div>

</template>

<script>
import QrCode from './components/QrCode.vue'
import QrCapture from './components/QrCapture.vue'
import QrDecoder from './components/QrDecoder.vue'
import RepeatableQrcode from './components/RepeatableQrcode.vue'
import CreateQrcode from './components/CreateQrcode.vue'

export default {
  name: 'App',
  components: {
    QrCode,
    QrCapture,
    QrDecoder,
    RepeatableQrcode,
    CreateQrcode
  }
}
</script>

<style>

</style>