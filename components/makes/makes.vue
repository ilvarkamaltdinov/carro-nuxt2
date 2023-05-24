<template>
  <div class="makes">
    <div class="makes__wrap modal__makes">
      <ul class="makes__list makes__list--popular">
        <makes-item-popular v-for="item in popular"
                            @chooseMark="chooseMark(item)"
                            :for-chose-modal="forChoseModal"
                            :slug="item.slug"
                            @click="setModalMarks(false)"
                            :title="item.title"
                            :key="item.id"/>
      </ul>
      <ul class="makes__list makes__list--all makes__list--all-modal">
        <makes-item v-for="(item, index) in sortedMarks"
                    :slug="item.slug"
                    :active="item === currentMark"
                    :for-chose-modal="forChoseModal"
                    @click="clickMarks"
                    @choose="chooseMark(item)"
                    :key="index"
                    :item="item"/>
        <li v-if="showAllButton">
          <button-typical
            @click="clickAllMarks"
            :text="allMarks ? 'Меньше марок' :'Больше марок'"
            :class="{'button--show-active': allMarks }"
            class="button--show"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import sortBy from "lodash/sortBy";

export default {
  data() {
    return {
      allMarks: false,
    }
  },
  props: {
    forChoseModal: {
      type: Boolean,
      default: false
    },
    sort: String
  },
  computed: {
    ...mapGetters({
      marks: 'marks/marks/allMarks',
      alphabetMarks: 'marks/marks/alphabetMarks',
      popularMarks: 'marks/marks/popularMarks',
      currentMark: 'modal/modal-choose/currentMark'
    }),
    popular() {
      return this.popularMarks.slice(0, 10)
    },
    showAllButton() {
      if (this.$device.isMobile && this.marks) {
        return this.marks.length > 10
      } else if (this.marks) {
        return this.marks.length > 21
      }
    },
    sortedMarks() {
      return sortBy(this.marksList, [function (mark) {
        return mark.title;
      }])
    },
    marksList() {
      let marks = [...this.marks]
      let marksShowNumber = 21
      if (this.$device.isMobile) {
        marksShowNumber = 10
        if (this.allMarks) {
          return marks
        } else {
          marks = marks.sort((a, b) => parseFloat(b.offers_count) - parseFloat(a.offers_count))
          marks = marks.slice(0, marksShowNumber)
          marks = marks.sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()))
          return marks
        }
      } else {
        if (this.allMarks) {
          return marks
        } else {
          marks = marks.sort((a, b) => parseFloat(b.offers_count) - parseFloat(a.offers_count))
          marks = marks.slice(0, marksShowNumber)
          marks = marks.sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()))
          return marks
        }
      }
    }
  },
  methods: {
    ...mapActions({
      chooseMark: 'modal/modal-choose/chooseMark'
    }),
    ...mapMutations({
      setModalSearch: 'modal/modal-search/setModalSearch',
      setModalMenu: 'modal/modal-menu/setModalMenu',
      setModalMarks: 'modal/modal-marks/setModalMarks'
    }),
    clickAllMarks() {
      this.allMarks = !this.allMarks
    },
    clickMarks() {
      this.setModalMarks(false)
      this.setModalSearch(false)
    },
    markClick(item) {
      this.setModalMarks(false)
      this.$router.push('/used/' + item.slug)
    }
  }
}
</script>
