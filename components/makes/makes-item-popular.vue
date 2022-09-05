<template>
	<li v-if="forChoseModal" :class="makesListItemClass ? 'makes__popular-item makes__popular-item--active' : 'makes__popular-item'">
		<span @click="$emit('chooseMark')" class="makes__popular-link ">
			<svg-icon :name="'icon-' + title.toLowerCase()"
			          class="makes__popular-logo" />
		</span>
	</li>
	<li v-else :class="makesListItemClass ? 'makes__popular-item makes__popular-item--active' : 'makes__popular-item'">
		<nuxt-link :to="'/used/'+slug" @click.native="$emit('click')" class="makes__popular-link ">
			<svg-icon :name="'icon-' + title.toLowerCase()"
			          class="makes__popular-logo" />
		</nuxt-link>
	</li>
</template>
<script>
export default {
	props: {
		forChoseModal: {
			type: Boolean,
			default: false
		},
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
