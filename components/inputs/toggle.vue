<template>
  <label class="toggle">
    <input class="toggle__checkbox" type="checkbox" :checked="theme ? isDark : isMediaDark" @input="toggle">
    <div class="toggle__slot">
      <div class="toggle__sun">
        <svg-icon class="toggle__icon toggle__icon--sun" name="icon-sun"/>
      </div>
      <div class="toggle__button"></div>
      <div class="toggle__moon">
        <svg-icon class="toggle__icon toggle__icon--moon" name="icon-moon"/>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      theme: this.$cookies.get('theme'),
      isMediaDark: null,
    }
  },
  computed: {
    isDark() {
      return this.theme === 'dark';
    }
  },
  methods: {
    toggle(){
      const predicate = this.theme ? this.isDark: this.isMediaDark;
      this.$cookies.set('theme', predicate ? 'light' : 'dark');
      this.theme = predicate ? 'light' : 'dark';
    }
  },
  head() {
    if(this.isDark == null) return;
     return {
      htmlAttrs: {
        'data-theme': this.theme
      },
    }
  },
  mounted() {
    this.isMediaDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  },
}
</script>
