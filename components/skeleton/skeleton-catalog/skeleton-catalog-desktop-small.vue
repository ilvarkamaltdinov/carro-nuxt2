<template>
	<div class="catalog__list grid grid--catalog">
		<div class="skeleton__item grid__col-4"
		     v-for="i in items"
		     :key="i">
			<div class="skeleton__content"></div>
			<div class="skeleton__content"></div>
			<div class="skeleton__content skeleton__content--img"></div>
			<div class="skeleton__content"></div>
			<div class="skeleton__content skeleton__content--buttons"></div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		items: {
			type: Number,
			default: 4
		}
	}
}
</script>