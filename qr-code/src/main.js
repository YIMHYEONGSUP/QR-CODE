import { createApp } from 'vue'
import App from './App.vue'

import VueQrCodeReader from "vue-qrcode-reader";
import QrReader from 'vue3-qrcode-reader';

const app = createApp(App);


app.use(VueQrCodeReader)
    .use(QrReader)
    .mount('#app')

