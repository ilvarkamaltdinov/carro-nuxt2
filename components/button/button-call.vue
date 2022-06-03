<template>
	<button class="button button--action button--call"
	        @click.prevent="$emit('click')"
	        type="button">
		<svg-icon class="button__icon"
		          name="icon-call" />
	</button>
</template>