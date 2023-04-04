import {mapGetters} from "vuex";

export default {
  methods: {
    makeUrl(slug) {
      return 'https://' + this.domain + slug
    }
  },
  computed: {
    ...mapGetters({
      settings: 'settings/settings/settings',
      domain: 'domain'
    })
  },
  jsonld() {
    let result = []

    let breadcrumbs_items = this.crumbs?.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': this.makeUrl(item.link),
        name: item.title,
      },
    }));

    const breadcrumbs = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs_items,
    }
    const seller = {
      "@context": "https://schema.org/",
      "@type": "Order",
      "seller": {
        "@type": "Organization",
        "name": "carro.ru",
        "telephone": this.settings.phone
      }
    }
    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "carro",
      "url": 'https://' + this.domain,
      "logo": 'https://' + this.domain + '/' + 'carro.png',
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": this.settings.phone,
        "contactType": "customer service",
        "areaServed": "RU",
        "availableLanguage": "Russian"
      }
    }
    result.push(breadcrumbs, seller, organization)

    if (this.jsonType === 'car') {
      const product = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": this.offer?.name,
        "image": this.offer?.images[0].medium,
        "description": this.description,
        "brand": this.offer?.mark.title,
        "gtin14": 2918,
        "sku": 2918,
        "offers": {
          "@type": "Offer",
          "url": 'https://' + this.domain + this.$route.fullPath,
          "priceCurrency": "RUB",
          "price": this.offer?.price,
          "priceValidUntil": "2029-12-31",
          "availability": `${this.offer?.is_active ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'}`,
          "itemCondition": "https://schema.org/UsedCondition"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": this.offer?.rating.rating_total.toFixed(),
          "ratingCount": (Math.random() * (20 - 10) + 10).toFixed()
        }
      }
      const qv = {
        "@context": "https://schema.org/",
        "@type": "QuantitativeValue",
        "unitCode": "KMT",
        "value": this.offer?.run
      }
      const oic = {
        "@context": "https://schema.org/",
        "@type": "OfferItemCondition",
        "name": "used"
      }
      const es = {
        "@context": "https://schema.org/",
        "@type": "EngineSpecification",
        "name": `${this.offer?.engine_volume} л. ${this.offer?.engine_power} л.с.`
      }

      result.push(product, qv, oic, es)
    }
    if (this.jsonType === 'faq') {
      let mainEntity = []
      this.body.map(groups => {
        groups.list.map(val => {
          mainEntity.push({
            "@type": "Question",
            "name": val.question,
            "acceptedAnswer": val.answer
          })
        })
      })
      const faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": mainEntity
      }
      result.push(faq)
    }

    return result

  },
}
