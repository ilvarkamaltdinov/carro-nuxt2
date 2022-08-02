<template>
	<nuxt-link
			:to="backButton.link"
			class="page-header__back">
		<span class="page-header__back-model">
			{{ backButton.title }}
		</span>
		<svg-icon class="page-header__back-arrow"
		          name="icon-arrow" />
	</nuxt-link>
</template>

<script>
export default {
	props: {
		backButton: Object
	}
}
</script>