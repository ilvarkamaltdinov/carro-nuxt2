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
        let noscript = document.createElement("noscript");
        noscript.innerHTML = `<div>
    <img src="https://top-fwz1.mail.ru/counter?id=${settings.mytarget};js=na" style="border:0;position:absolute;left:-9999px;" alt="Top.Mail.Ru" />
  </div>`
        let ym_script = document.createElement("script");
        ym_script.innerHTML = `
               
      var _tmr = window._tmr || (window._tmr = []);
      _tmr.push({id: "${settings.mytarget}", type: "pageView", start: (new Date()).getTime(), pid: "USER_ID"});
      (function (d, w, id) {
        if (d.getElementById(id)) return;
        var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
        ts.src = "https://top-fwz1.mail.ru/js/code.js";
        var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
        if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
      })(document, window, "topmailru-code");
        
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
        document.head.appendChild(ym_script);
        document.head.appendChild(noscript);

    }
}