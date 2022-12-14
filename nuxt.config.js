export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        // script: [
        //     // Google Analytics Code
        //     {
        //       src: "https://www.googletagmanager.com/gtag/js?id=UA-253339814-1",
        //       async: true,
        //     },
        //     // Import analitics.js file
        //     { src: "/static/analitics.js" },
        //   ],

        title: 'Antixx TechHub - App | Website | SEO | ITSM | Cloud Solutions | IT Service Provider Company',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub is the best company to get the best IT services and support for App, website, SEO, ITSM, Cloud Solutions, digital marketing, etc. at a least price.' },
            { hid: 'keywords', name: 'keywords', content: 'Best IT services, IT Service Provider, app developers, Mobile App Development, ITSM experts, cloud managed service providers, Cloud Support Services, Managed IT service provider, ML services provider company, data service management, data analytic solutions, Cloud Solutions, Security Integration, Web Designing Service, web design and development services, ITSM Agency, Hire digital marketing experts, Hire Android and iOS app developers, Hire Blockchain developers, Blockchain network consulting, local SEO, SEO experts, Hire digital marketers, Hire UX / UI designers' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap'
            }
        ]

    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/animate.min.css',
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/boxicons.min.css',
        '~/assets/css/style.scss',
        '~/assets/css/responsive.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/bootstrap-vue', ssr: false },
        { src: '~/plugins/vue-carousel', ssr: false },
        { src: '~/plugins/vue-cool-lightbox', ssr: false },
        { src: '~/plugins/vue-backtotop', ssr: false },
        { src: '~/plugins/vue-particles', ssr: false },
    ],

    // Globally configure <nuxt-link> default active class.
    router: {
        linkActiveClass: 'active'
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://strapi.nuxtjs.org/setup
        '@nuxtjs/strapi'
    ],

    strapi: {
        // url: 'http://localhost:1337/api',
        url: 'https://cms.antixxtechhub.in/api/',
        entities: [
            // { name: 'sitelogo', type: 'single' },
            // { name: 'bannerdefaulthomepage', type: 'single' },
            // { name: 'featurescards', type: 'collection' },
            // { name: 'mobiledevelopment', type: 'single' },
            // { name: 'hostingservices', type: 'single' },
            // { name: 'whychooseus', type: 'single' },
            // { name: 'funfactscards', type: 'collection' },
            // { name: 'amazingfeaturescards', type: 'collection' },
            // { name: 'feedbackcards', type: 'collection' },
            // { name: 'pricingtabs', type: 'collection' },
            // { name: 'teamcards', type: 'collection' },
            // { name: 'lovingclientscards', type: 'collection' },
            // { name: 'faq', type: 'single' },
            // { name: 'bestsupport', type: 'single' },
            // { name: 'BlogCard', type: 'single' },
            // { name: 'footer', type: 'single' },
            // { name: 'takeyourbusiness', type: 'single' },
            // { name: 'partner', type: 'collection' },
            // { name: 'downloadapp', type: 'single' },
            // { name: 'freetrial', type: 'single' },
            // { name: 'featurespages', type: 'collection' },
            // { name: 'servicedetails', type: 'collection' },
            // { name: 'servicescards', type: 'collection' },
            // { name: 'blogdetails', type: 'collection' },
        ]
    },

    // // Build Configuration: https://go.nuxtjs.dev/config-build
    // build: {
    // }

    build: {
        postcss: null,
        loaders: {
            vue: {
                prettify: false
            }
        }
    },
}