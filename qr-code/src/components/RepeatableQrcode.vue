<template>
  <div>
    <p class="decode-result">Last result: <b>{{ result }}</b></p>

    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
      <div v-show="showScanConfirmation" class="scan-confirmation">
        <!-- capture image use $withBase('path') alt="Checkmark" -->
      </div>
    </qrcode-stream>

  </div>
</template>

<script>
import { QrcodeStream } from 'vue3-qrcode-reader'

export default {

  components: { QrcodeStream },

  data () {
    return {
      camera: 'auto',
      result: null,
      showScanConfirmation: false
    }
  },

  methods: {

    async onInit (promise) {
      try {
        await promise

      } catch (e) {
        console.error(e)
      } finally {
        this.showScanConfirmation = this.camera === "off"
      }
    },

    async onDecode (content) {
      this.result = content

      this.redirectSite(content);

      this.pause()
      await this.timeout(500)
      this.unpause()
    },

    unpause () {
      this.camera = 'auto'
    },

    pause () {
      this.camera = 'off'
    },

    timeout (ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms)
      })
    },

    redirectSite(content) {
      // window.open("https://google.com", "_blank");

      // 현재 localhost8080:(content 값) 
      window.open(content, "_blank");
      alert(content , "_blank");
    },

  }
}
</script>

<style scoped>
.scan-confirmation {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
</style>