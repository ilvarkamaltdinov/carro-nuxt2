<template>
	<li v-if="forChoseModal" :class="makesListItemClass ? 'makes__popular-item makes__popular-item--active' : 'makes__popular-item'">
		<span @click="$emit('chooseMark')" class="makes__popular-link ">
			<img :src="require(`~/assets/icons/icon-${title.toLowerCase()}.svg`)"
			          class="makes__popular-logo" />
		</span>
	</li>
	<li v-else :class="makesListItemClass ? 'makes__popular-item makes__popular-item--active' : 'makes__popular-item'">
		<nuxt-link :to="'/used/'+slug" @click.native="$emit('click')" class="makes__popular-link ">
			<img :data-src="require(`~/assets/icons/icon-${title.toLowerCase()}.svg`)"
			          class="makes__popular-logo lazyload" />
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
