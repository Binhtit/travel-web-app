import Vue from "vue";
// import "../static/assets/common";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// import VueAgile from 'vue-agile'
// Vue.use(VueAgile)
