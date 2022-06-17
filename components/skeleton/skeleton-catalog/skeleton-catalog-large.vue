<template>
	<div class="catalog__list">
		<div class="skeleton__item grid__col-4" v-for="i in 4" :key="i">
			<div class="skeleton__content"></div>
			<div class="skeleton__content"></div>
			<div class="skeleton__content skeleton__content--img"></div>
			<div class="skeleton__content"></div>
			<div class="skeleton__content skeleton__content--buttons"></div>
		</div>
	</div>
</template>