import {mapGetters} from "vuex";

export default {
    computed: {
        ...mapGetters({
            settings: 'settings/settings/settings',
            domain: 'domain'
        })
    },
    watch: {
        '$route'() {
           ym(this.settings.ym, 'hit', `${this.domain}${this.$route.fullPath}`);
        },
    },
    mounted() {
        console.log('layout loading')
        let ym_script = document.createElement("script");
        ym_script.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        (function(m, e, t, r, i, k, a) {
                m[i] = m[i] || function() {
                    (m[i].a = m[i].a || []).push(arguments)
                };
                m[i].l = 1 * new Date();
                k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${this.settings.ym}, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
                ecommerce: "dataLayer"
            });
        `;
        document.body.appendChild(ym_script);

    }
}