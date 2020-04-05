require('dotenv').config();

export default {
  mode: 'universal',
  env: {
    NIAGA_URL: process.env.NIAGA_URL,
    APP_ENV: process.env.APP_ENV,
    PAYMENT_URL: process.env.PAYMENT_URL,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#303f9f',
    height: '4px',
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/app.scss',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/components/_variables.scss',
      '~/assets/scss/vendor/_mixins.scss',
    ],
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
    {
      src: '~/plugins/bootstrap.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-agile.js',
      ssr: false,
    },
    {
      src: '~/plugins/v-calender.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-carousel.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-slider-component.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-bootstrap.js',
      ssr: false,
    },
    {
      src: '~/plugins/clipboard.js',
      ssr: false,
    },
    {
      src: '~/plugins/webfont',
      ssr: false,
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-healthcheck',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL,
    // retry: { retries: 3 },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    // },
  },
  healthcheck: {
    path: '/health-check',
    contentType: 'application/json',
    healthy: () => JSON.stringify({ result: 'OK' }),
  },
};
