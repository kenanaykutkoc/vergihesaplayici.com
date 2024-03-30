import fs from "fs";
import path from "path";
import tr from "vuetify/es5/locale/tr";

const cspNonceTxtPath = path.resolve(__dirname, "csp-nonce.txt");
const isCspNonceTxtExists = fs.existsSync(cspNonceTxtPath);
const cspNonce = isCspNonceTxtExists ?
    fs.readFileSync(cspNonceTxtPath, { encoding: "utf-8" }) :
    "development-mode";

export default {
    target: "static",
    components: true,
    generate: {
        fallback: "404.html"
    },
    server: {
        host: process.env.SERVER_HOST,
        port: process.env.SERVER_PORT
    },
    head: {
        titleTemplate: `%s - ${process.env.APP_NAME}`,
        title: process.env.APP_NAME,
        meta: [
            { charset: "UTF-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                name: "robots",
                content: "index, follow"
            },
            {
                "http-equiv": "X-UA-Compatible",
                "content": "ie=edge"
            },
            {
                name: "format-detection",
                content: "telephone=no"
            },
            {
                name: "msapplication-tap-highlight",
                content: "no"
            },
            {
                name: "twitter:site",
                content: "@ozgurg0"
            },
            {
                name: "twitter:creator",
                content: "@ozgurg0"
            }
        ],
        link: [
            {
                hid: "shortcut-icon", // Overriding `@nuxtjs/pwa`
                rel: "icon",
                href: "/favicon.svg",
                type: "image/svg+xml"
            },
            {
                rel: "icon",
                type: "image/png",
                href: "/favicon.png"
            },
            {
                rel: "dns-prefetch",
                href: "https://firebaseinstallations.googleapis.com"
            },
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
                crossorigin: ""
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: ""
            }
        ]
    },
    modules: [
        "@nuxt/content"
    ],
    buildModules: [
        "@nuxtjs/style-resources",
        "@nuxtjs/dotenv",
        "@nuxtjs/eslint-module",
        "@nuxtjs/vuetify",
        "@nuxtjs/svg",
        "@nuxtjs/pwa",
        "@/modules/append-canonical-to-head.js",
        "@/modules/append-calculator-presets-to-sitemap.js", // It must be before `@nuxtjs/sitemap`
        "@/modules/append-articles-to-sitemap.js", // It must be before `@nuxtjs/sitemap`
        "@nuxtjs/sitemap"
    ],
    router: {
        trailingSlash: true
    },
    build: {
        publicPath: "/public/",
        indicator: false,
        extractCSS: {
            ignoreOrder: true
        },
        html: {
            minify: { // https://stackoverflow.com/a/64739284/7841581
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                preserveLineBreaks: false,
                collapseWhitespace: true
            }
        }
    },
    css: [
        "@/assets/scss/style.scss"
    ],
    styleResources: {
        scss: [
            "@/assets/scss/style.scss"
        ]
    },
    plugins: [
        process.env.NODE_ENV ? "@/plugins/firebase.client.js" : null,
        "@/plugins/vue-html2canvas.client.js",
        "@/plugins/number-directive.client.js"
    ],
    loading: {
        color: process.env.APP_PRIMARY_COLOR,
        failedColor: "#f44336",
        throttle: 600
    },
    vuetify: {
        customVariables: [
            "@/assets/scss/vuetify-custom-variables.scss"
        ],
        treeShake: true,
        defaultAssets: {
            icons: false,
            font: {
                family: "Figtree"
            }
        },
        lang: {
            locales: { tr },
            current: "tr"
        },
        theme: {
            defaultAssets: false,
            dark: true,
            options: {
                cspNonce,
                variations: false,
                customProperties: false
            },
            themes: {
                dark: {
                    primary: process.env.APP_PRIMARY_COLOR,
                    secondary: process.env.APP_SECONDARY_COLOR
                }
            }
        },
        icons: {
            iconfont: "mdiSvg"
        }
    },
    sitemap: {
        hostname: process.env.APP_URL,
        gzip: true,
        defaults: {
            changefreq: "weekly",
            priority: 1.0,
            lastmod: new Date()
        }
    },
    pwa: {
        meta: {
            theme_color: process.env.APP_PRIMARY_COLOR
        },
        manifest: {
            background_color: process.env.APP_SECONDARY_COLOR,
            name: process.env.APP_NAME,
            short_name: process.env.APP_NAME,
            description: "vergihesaplayici.com, vergi hesaplar.",
            orientation: "portrait",
            id: "/?standalone=true",
            lang: "tr"
        }
    },

    // Disable unused Nuxt features for a small bundle size.
    // This is not documented by Nuxt.
    loadingIndicator: false,
    fetch: {
        client: false
    },
    features: {
        middleware: false,
        deprecations: false,
        validate: false,
        fetch: false,
        clientOnline: false,
        clientPrefetch: false,
        clientUseUrl: true,
        componentAliases: false,
        componentClientOnly: false
    }
};
