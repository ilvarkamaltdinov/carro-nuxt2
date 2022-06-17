<template>
	<div class="catalog__list grid grid--catalog">
		<div v-for="i in 2" :key="i" class="skeleton__item skeleton__item--l grid__col-8">
			<div class="skeleton__img-wrap">
				<div class="skeleton__content skeleton__content--img"></div>
				<div class="skeleton__content skeleton__content--img"></div>
				<div class="skeleton__content skeleton__content--img"></div>
			</div>
			<div class="skeleton__content skeleton__content--buttons"></div>
			<div class="skeleton__content skeleton__content--buttons"></div>
		</div>
	</div>
</template>