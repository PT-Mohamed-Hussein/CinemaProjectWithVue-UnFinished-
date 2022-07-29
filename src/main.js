import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VueGoogleMaps from '@fawmi/vue-google-maps'

library.add(fas);
library.add(fab);

const app = createApp(App);

app.use(store);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("font-awesome-layers", FontAwesomeLayers);
app.component("font-awesome-layers-text", FontAwesomeLayersText);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyA2mGJ_Afez_VC1Z_Cn1oHIyGHyto5PGtQ',
    },
})
app.mount("#app");