<<<<<<< HEAD
import { resolve } from "path";
=======
import { resolve } from 'path'
>>>>>>> 54a1a23a3e8e8399c806dbe39bec92c3907a3bd7
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "travel-web-app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
<<<<<<< HEAD
  alias: {
    "@images": resolve(__dirname, "./assets/images"),
=======

  alias: {
    '@images': resolve(__dirname, './assets/images'),
    '@imagesCommon': resolve(__dirname, './assets/images/common')
>>>>>>> 54a1a23a3e8e8399c806dbe39bec92c3907a3bd7
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/common.scss", "~assets/scss/reset.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vue-carousel.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { postcss: null },
};
