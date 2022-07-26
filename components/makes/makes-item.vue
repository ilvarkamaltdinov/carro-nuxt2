<template>
	<li class="makes__item"
	    v-if="forChoseModal ">
		<span @click="$emit('choose')"
		      class="makes__link"
		      :class="{'makes__link-active':active}">
			<span class="makes__title">
				{{ item.title || item.name }}
				<span v-if="item.year_begin">
					[ {{ item.year_begin }} - {{ item.year_end ? item.year_end : 'н.в.' }}]
				</span>
			</span>
			<span class="makes__qty">
				{{ item.offers_count }}
			</span>
		</span>
	</li>
	
	<li class="makes__item"
	    v-else>
		<nuxt-link :to="'/used/'+slug"
		           @click.native="$emit('click')"
		           class="makes__link">
			<div class="makes__title">
				{{ item.title || item.name }}
			</div>
			<div class="makes__qty">
				{{ item.offers_count }}
			</div>
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
		item: {
			type: Object,
			default: () => {
			}
		},
		active: {
			type: Boolean,
			default: false
		},
		slug: {
			type: String,
			default: ''
		}
	},
}
</script>