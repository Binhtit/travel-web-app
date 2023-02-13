import { resolve } from "path";
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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,500;1,600;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
      },
    ],
  },
  styleResources: {
    scss: [
      "~assets/scss/mixins.scss",
      "~assets/scss/variables.scss",
  ],
  },

  alias: {
    "@images": resolve(__dirname, "./assets/images"),
    "@imagesCommon": resolve(__dirname, "./assets/images/common"),
    "@data": resolve(__dirname, "./sources/data"),
    "@resources": resolve(__dirname, "./resources"),
    '@sources': resolve(__dirname, './sources')
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/scss/reset",
    "~assets/scss/common",
    // "~assets/scss/variable",
    // "~assets/scss/mixin",
  ],
// Global scss
styleResources: {
  scss: [
    '~assets/scss/variables.scss',
    '~assets/scss/mixins.scss'
  ],
},
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/dependencies"],
  css: ["~assets/scss/common.scss", "~assets/scss/reset.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vue-carousel.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [ '@nuxtjs/style-resources','@nuxtjs/fontawesome'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt", 'nuxt-agile'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { postcss: null },

  //global fontawesome
  fontawesome: {
    icons:{
     solid:true,
     brands:true
    }
   },
  middleware: 'checkPermision',

};
