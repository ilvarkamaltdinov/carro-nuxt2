<template>
  <label class="page-header__toggle hamburger"
         @change="$emit('burger')"
         for="hamburger"
         tabindex="0">
    <input id="hamburger"
           :checked="modalMenu"
           type="checkbox"/>
    <span class="hamburger__element"></span>
    <span class="hamburger__element"></span>
    <span class="hamburger__element"></span>
    <span class="visually-hidden">Меню сайта</span>
  </label>
</template>

<script>
export default {
  props: {
    modalMenu: Boolean
  }
}
</script>
