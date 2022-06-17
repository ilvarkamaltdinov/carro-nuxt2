<template>
	<!--TODO сильно лагает при закрытии менюшки-->
	<li  :class="makesListItemClass ? 'makes__popular-item makes__popular-item--active' : 'makes__popular-item'">
		<nuxt-link :to="'/used/'+slug" @click.native="$emit('click')" href="" class="makes__popular-link ">
			<svg-icon :name="'icon-' + title.toLowerCase()"
			          class="makes__popular-logo" />
		</nuxt-link>
	</li>
</template>
<script>
export default {
	props: {
		makesListItemClass: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: ''
		},
		slug: {
			type: String,
			default: ''
		}
	}
}
</script>