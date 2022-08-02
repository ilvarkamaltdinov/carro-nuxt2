<template>
	<button @click="$emit('click')"
	        type="button"
	        :class="{'button--loading':preloader}"
	        class="button button--action button--text button--link button--download">
		<svg-icon class="button__icon"
		          name="icon-autoteka" />
		<span v-if="preloader" class="loader loader--button"></span>
		<span class="button__text"> Скачать отчет</span>
	</button>
</template>
<script>
export default {
	props: {
		preloader: Boolean
	}
}
</script>
