<template>
	<picture>
		<source type="image/webp"
		        :data-srcset="`${smallWebp} 1x, ${bigWebp} 2x`" />
		<source media="(min-width: 768px)"
		        :data-srcset="`${small} 1x, ${big} 2x`" />
		<img :class="classes"
		     :data-src="big"
		     alt=""
		     loading="lazy"
		     data-aos="fade-right"
		     data-aos-duration=" 750"
		     data-aos-easing="ease-in-out"
		     data-aos-mirror="true" />
	</picture>
</template>

<script>
export default {
	props: {
		classes: String,
		small: String,
		smallWebp: String,
		big: String,
		bigWebp: String
	}
}
</script>