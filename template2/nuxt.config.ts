import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr:false,
    css:[
        '@/assets/css/styles.css',
        '@/assets/css/bootstrap.css',
        '@/assets/css/font.css',

    ],
    app:{
        head:{
            meta:[
                {
                    name:"viewport",
                    content:"width=device-width, initial-scale=1"
                },
                {
                    name:"description",
                    content:"The Wedding of Rizka and Woko"
                },
                {
                    name:"keywords",
                    content:"wedding, wedding invitation, invitation, the wedding"
                },
                {
                    name:"author",
                    content:"Rizka & Woko"
                },
                {
                    property:"og:type",
                    content:"website"
                },
                {
                    property:"og:title",
                    content:"The Wedding of Rizka and Woko"
                },
                {
                    property:"og:image",
                    content:"images/readme/half%20circle-200.png"
                },
                {
                    property:"og:url",
                    content:"#"
                },
                {
                    property:"og:site_name",
                    content:"The Wedding of Rizka and Woko"
                },
                {
                    property:"og:description",
                    content:"The Wedding of Rizka and Woko. Open source wedding invitation"
                },
                {
                    property:"twitter:card",
                    content:"summary_large_image"
                },
                {
                    property:"twitter:site",
                    content:"@triandamai"
                },
                {
                    property:"twitter:creator",
                    content:"@triandamai"
                },
                {
                    property:"twitter:title",
                    content:"The Wedding of Rizka and Woko"
                },
                {
                    property:"twitter:description",
                    content:"Open Source Wedding Invitation. The Wedding of Rizka and Woko"
                },
                {
                    property:"twitter:image",
                    content:"images/readme/half%20circle-200.png"
                },
                {
                    property:"twitter:url",
                    content:"#"
                }
            ]
        }
    }
})
