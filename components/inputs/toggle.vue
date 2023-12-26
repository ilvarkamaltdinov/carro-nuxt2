<template>
  <label class="toggle">
    <input class="toggle__checkbox" type="checkbox" :checked="isDark" @input="isDark = !isDark">
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
      isDark: null,
    }
  },
  head() {
    if(this.isDark == null) return;
     return {
      htmlAttrs: {
        'data-theme': this.isDark ? 'dark': 'light'
      },
    }
  },
  mounted() {
    this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
</script>
