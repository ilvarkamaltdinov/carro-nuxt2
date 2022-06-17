<template>
	<div class="catalog__list">
		<div class="skeleton__item skeleton__item--s" v-for="i in 4" :key="i">
			<div class="skeleton__content skeleton__content--img"></div>
			<div class="skeleton__content skeleton__content--buttons"></div>
			<div class="skeleton__content skeleton__content--buttons"></div>
		</div>
	</div>
</template>