<template>
	<a class="button button--action button--text button--link"
	   href="tel:+74952452342">
		<svg-icon class="button__icon"
		          name="icon-call" />
		<span class="button__text">{{ phone }}</span>
	</a>
</template>
<script>
export default {
	props: {
		phone: String
	}
}
</script>