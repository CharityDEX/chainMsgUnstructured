import { Buffer } from "buffer";
window.Buffer = Buffer;

import { createApp } from "vue";
import "./index.scss";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
