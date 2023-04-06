<template>
	<button class="button button--action button--favorite"
	        :class="{'button--favorite-active' : active}"
	        @click.prevent="$emit('click')"
	        type="button"
          title="Добавить в избранное"
          aria-label="Добавить в избранное">
		<svg-icon class="button__icon"
		          :name="active?'icon-heart-active':'icon-heart'" />
	</button>
</template>

<script>
export default {
	props: {
		active: {
			type: Boolean,
			default: false
		}
	}
}
</script>
