import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { initConfig } from "@joyid/evm";

initConfig({
    // name of your app
    name: "JoyID demo",
    // logo of your app
    logo: "https://fav.farm/🆔",
    // JoyID app url that your app is integrated with
    joyidAppURL: "https://testnet.joyid.dev",
  });

createApp(App).mount('#app')
