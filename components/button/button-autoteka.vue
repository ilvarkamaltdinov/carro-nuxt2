<template>
	<button @click.prevent="$emit('click')" class="button button--action button--autoteka button--text"
	        type="button">
      <img src="~/assets/img/autoteka.svg"
            alt="Эмблема Автотеки — carro.ru"
            height="16"
            width="16"
            class="button__icon icon">
			<span class="button__text">Проверить
        <span class="button__text-autoteka">по Автотеке</span>
      </span>
	</button>
</template>
