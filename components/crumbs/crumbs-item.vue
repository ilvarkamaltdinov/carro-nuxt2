<template>
	<li class="crumbs__item"
	    v-if="disabled">
		<span v-html="crumb.title">
		</span>
	</li>
	<li class="crumbs__item"
	    v-else>
		<nuxt-link :to="crumb.link"
		           class="crumbs__link"
		           v-html="crumb.title">
		</nuxt-link>
	</li>

</template>
<script>
export default {
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		crumb: {
			type: Object,
			default: () => {
			}
		}
	}
}
</script>