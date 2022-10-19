<template>
  <div>
    <div>
      <label>QR코드 생성</label>
      <input type="text" v-model="inputText">
      <input type="button" @click="generate" value="생성">
    </div>
    <vue-qrcode v-if="targetText" :value="targetText" :options="option" tag="img"></vue-qrcode>
  </div>
</template>

<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";
export default {
  components: {
    VueQrcode
  },
  data() {
    return {
      inputText: "",
      targetText: "",
      option: {
        errorCorrectionLevel: "M",
        maskPattern: 0,
        margin: 10,
        scale: 2,
        width: 300,
        color: {
          dark: "#000000FF",
          light: "#FFFFFFFF"
        }
      }
    };
  },
  methods: {
    generate: function() {
      this.targetText = this.inputText;
    }
  }
};
</script>
<style scoped>
</style>