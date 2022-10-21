import {
  mapGetters
} from "vuex";

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
  head() {
    return {
      script: [{
        src: `https://www.googletagmanager.com/gtag/js?id=${this.settings.gtag}`,
        async: true
      }]
    }
  },
  mounted() {
    window.dataLayer = window.dataLayer || [];
    window._tmr = window._tmr || [];
    this.googleTag()
    this.myTarget()
    this.vkPixel()
    this.yandexMetrika()
  },
  methods: {
    googleTag() {
      if (this.settings.gtag) {
        function gtag() {
          dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', `${this.settings.gtag}`);
      }
    },
    myTarget() {
      if (this.settings.mytarget) {
        _tmr.push({
          id: `${this.settings.mytarget}`,
          type: "pageView",
          start: (new Date()).getTime(),
          pid: "USER_ID"
        });
        (function (d, w, id) {
          if (d.getElementById(id)) return;
          var ts = d.createElement("script");
          ts.type = "text/javascript";
          ts.async = true;
          ts.id = id;
          ts.src = "https://top-fwz1.mail.ru/js/code.js";
          var f = function () {
            var s = d.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(ts, s);
          };
          if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
          } else {
            f();
          }
        })(document, window, "topmailru-code");
      }
    },
    vkPixel() {
      if (this.settings.vkpixel && this.settings.vkpixel_alt) {
        const vkPixel = this.settings.vkpixel;
        const vkPixelAlt = this.settings.vkpixel_alt;
        (
          function () {
            var t = document.createElement("script");
            t.type = "text/javascript", t.async = !0, t.src = 'https://vk.com/js/api/openapi.js?169', t.onload = function () {
              VK.Retargeting.Init(vkPixel),
              VK.Retargeting.Hit()
              VK.Retargeting.Init(vkPixelAlt),
              VK.Retargeting.Hit()
            }, document.head.appendChild(t)
          }()
        )
      }
    },
    yandexMetrika() {
      (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () {
          (m[i].a = m[i].a || []).push(arguments)
        };
        m[i].l = 1 * new Date();
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
      })
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(`${this.settings.ym}`, "init", {
        defer: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        ecommerce: "dataLayer"
      });
      ym(this.settings.ym, 'hit', `${this.domain}${this.$route.fullPath}`);
    }
  }
}
