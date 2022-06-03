<template>
	<a class="catalog__img-link"
	   href="">
		<picture>
			<source type="image/webp"
			        media="(min-width: 768px)"
			        :srcset="img" />
			<source media="(min-width: 768px)"
			        :srcset="img" />
			<img class="lazyload"
			     :src="img"
			     :srcset="img"
			     alt="" />
		</picture>
	</a>
</template>
<script>
export default {
	props: {
		img: {
			type: String,
			default: ''
		}
	}
}
</script>