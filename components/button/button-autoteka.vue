<template>
  <button @click.prevent="$emit('click')" class="button button--action button--autoteka button--text"
          type="button">
    <img src="~/assets/img/autoteka.svg"
         alt="Эмблема Автотеки — carro.ru"
         height="16"
         width="16"
         class="button__icon">
    <span class="button__text">
        <slot name="text">
          VIN проверен
        </slot>
      <!--        <span class="button__text-autoteka">по Автотеке</span>-->
      </span>
  </button>
</template>
