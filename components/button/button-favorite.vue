<template>
	<button class="button button--action button--favorite"
	        @click.prevent="$emit('click')"
	        type="button">
		<svg-icon class="button__icon"
		          name="icon-heart" />
	</button>
</template>