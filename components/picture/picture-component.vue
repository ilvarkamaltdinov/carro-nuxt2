<template>
	<picture>
		<source type="image/webp"
		        :data-srcset="`${smallWebp} 1x, ${bigWebp} 2x`" />
		<source media="(min-width: 768px)"
		        :data-srcset="`${small} 1x, ${big} 2x`" />
		<img :class="classes"
		     :data-src="small"
		     :loading="lazy ? 'lazy' : ''"
		     :data-srcset="big"
		     alt="" />
	</picture>
</template>

<script>
export default {
	props: {
		classes: String,
		small: String,
		smallWebp: String,
		big: String,
		bigWebp: String,
		lazy: Boolean
	}
}
</script>