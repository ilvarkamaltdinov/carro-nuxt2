<template>
	<!--TODO сильно лагает при закрытии менюшки-->
	<li  :class="makesListItemClass ? 'makes__popular-item makes__popular-item--active' : 'makes__popular-item'">
		<a @click.prevent="$emit('click')" href="" class="makes__popular-link ">
			<svg-icon :name="'icon-' + title.toLowerCase()"
			          class="makes__popular-logo" />
		</a>
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
		}
	}
}
</script>