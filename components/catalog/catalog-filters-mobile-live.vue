<template>
  <div v-if="showFilters"
       class="catalog__filters-mobile">
    <label class="form__field-wrap form__field-wrap--select">
      <inputs-select :value="chosenMark"
                     title="Марка"
                     :options="currentMarks"
                     @input="handlerSelect( $event, 'mark')"/>
    </label>
    <label class="form__field-wrap form__field-wrap--select">
      <inputs-select :value="chosenFolder"
                     title="Модель"
                     :options="currentFolders"
                     @input="handlerSelect( $event, 'folder')"/>
    </label>
    <!--    <label class="form__field-wrap form__field-wrap&#45;&#45;select">-->
    <!--      <inputs-select :value="chosenGeneration"-->
    <!--                     title="Поколение"-->
    <!--                     :options="currentGenerations"-->
    <!--                     @input="handlerSelect( $event, 'generation')"/>-->
    <!--    </label>-->
    <div class="form__field-wrap-line" v-if="!home">
      <label class="form__field-wrap form__field-wrap--select">
        <inputs-select :value="chosenYear"
                       title="Год от"
                       :options="currentYears"
                       @input="handlerSelect( $event, 'year')"/>
      </label>
      <label class="form__field-wrap form__field-wrap--select">
        <inputs-select :value="chosenPrice"
                       title="Цена до"
                       :options="currentPrices"
                       @input="handlerSelect( $event, 'price')"/>
      </label>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import range from 'lodash/range'
import sortBy from "lodash/sortBy";

export default {
  props: {
    home: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      showFilters: 'filters/filters/showFilters',
      filters: 'filters/filters/filters',
      usedMarks: 'marks/marks/allMarks',
      commMarks: 'marks/marks/commMarks',
      europeMarks: 'marks/marks/europeMarks'
    }),

    currentMarks() {
      switch (this.$route.params.category) {
        case 'commercial':
          return this.commMarks
        case 'europe':
          return this.europeMarks
        default:
          return this.usedMarks
      }
    },
    chosenMark() {
      return this.currentMarks.find(item => item.slug === this.$route.params.mark) || null
    },

    currentFolders() {
      return this.chosenMark?.folders || null
    },
    chosenFolder() {
      return this.chosenMark?.folders.find(item => item.slug === this.$route.params.model) || null
    },

    currentGenerations() {
      return sortBy(this.chosenFolder?.generations || null, [function (generation) {
        return generation.year_begin || null
      }])
    },
    chosenGeneration() {
      return this.currentGenerations?.find(item => item.slug === this.$route.params.car) || null
    },
    currentYears() {
      // if (years) {
      //   years = years.map(year => {
      //     return `от ${year}`
      //   })
      // }
      if (this.filters.year) {
        return range(this.filters.year[0], this.filters.year[1] + 1) || null
      }

    },
    chosenYear() {
      return this.currentYears?.find(year => year === Number(this.$route.query.year_from))
    },
    currentPrices() {
      let prices = []
      if (this.filters.price) {
        prices = range(this.filters.price[0] + 100000, this.filters.price[1] + 100000, 100000) || null
        if (prices) {
          prices = prices.map(prices => {
            return new Intl.NumberFormat("ru-RU").format(prices) + ' ₽';
          })
        }
      }
      return prices
    },
    chosenPrice() {
      return this.currentPrices?.find(price => {
        //очищаю значения от пробелов и значка рубля и ищу по цифрам из урла
        return Number(price.replace(/\D/g, '')) === Number(this.$route.query.price_to)
      })
    }
  },
  methods: {
    ...mapActions({
      request: 'request'
    }),
    ...mapMutations({
      setMobileFilterClick: 'click/SET_MOBILE_FILTER_CLICK'
    }),
    async handlerSelect(title, type) {
      await this.setMobileFilterClick(true)
      let route = `/${this.$route.params.category || 'used'}/`
      let query = {page: 1}
      switch (type) {
        case 'mark':
          let mark = this.currentMarks.find(item => item.title === title)
          route += `${mark.slug}`
          break
        case 'folder':
          let folder = this.currentFolders.find(item => item.title === title)
          route += `${this.$route.params.mark}/${folder.slug}`
          break
        case 'generation':
          let generation = this.currentGenerations.find(item => item.name === title)
          route += `${this.$route.params.mark}/${this.$route.params.model}/${generation.slug}`
          break
        case 'year':
          route = this.$route.fullPath
          query.year_from = title
          break
        case 'price':
          route = this.$route.fullPath
          //очищаю от пробелов и символов число
          query.price_to = title.replace(/\D/g, '')
          break
      }
      await this.$router.push({path: route, query: query})
    }
  }
}
</script>
