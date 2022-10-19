import { createApp } from 'vue'
import App from './App.vue'

import VueQrcodeReader from "vue-qrcode-reader";
import QrReader from 'vue3-qrcode-reader';

const app = createApp(App);

app.use(VueQrcodeReader)
    .use(QrReader)
    .mount('#app')


app.config.globalProperties.qr = QrReader;