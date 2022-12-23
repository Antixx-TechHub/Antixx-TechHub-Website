import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import VueAxios from "vue-axios";

import "./assets/custom.scss";

const app = createApp(App).use(router);
app.use(VueAxios, axios);
app.use(AOS.init()).mount("#app");
