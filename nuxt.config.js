// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const path = require('path');
const glob = require('glob');

let files = glob.sync('**/*.md', {cwd: 'contents'});

function getSlugs(article, _){
  let slug = article.substr(0, article.lastIndexOf('.'));
  return `/articles/${slug}`;
}
export default {
  generate :{
    routes: function() {
      return files.map(getSlugs);
    }
  },
  pageTransition: 'slide',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content:'Issyah Ismail. UI/UX Front End Developer based in Singapore' },
      { hid: 'og:locale', property: 'og:locale', content: 'sg_SG'},
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:title', property: 'og:title', content: 'Issyah Ismail'},
      { hid: 'og:description', property: 'og:description', content: 'Issyah Ismail. UI/UX Front End Developer based in Singapore'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'assets/css/transition.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/vue-scroll-reveal',
      mode: 'client'
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // google analytics
    '@nuxtjs/google-analytics',
    //site map
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  sitemap:{
    hostname: 'https://issyah.com'
  },
  // google analytics configuration
  googleAnalytics:{
    id: 'UA-148508896-1',
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          include: path.resolve(__dirname, "contents"),
          loader: "frontmatter-markdown-loader"
        }
      );
    }
  }
}
