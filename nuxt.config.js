module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtandvue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: "~/plugins/aos", ssr: false },
  ],
  modules: [
    'bootstrap-vue/nuxt',
    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
  ], 
  css: [
    // Charge un module Node.js directement (ici un fichier Sass)
    // 'bulma',
    // fichier CSS dans le projet
    // '@/assets/css/main.css',
    // un fichier SCSS dans le projet
    '@/assets/scss/custom.scss'
  ],   
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

