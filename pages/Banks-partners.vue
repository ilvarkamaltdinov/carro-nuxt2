<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<featured-banks />
		</div>
	</main>
</template>
<script>
import banks from "~/apollo/queries/banks"
import {mapActions, mapMutations} from "vuex";

export default {
	data() {
		return {
			crumbs: [
				{
					name: 'Главная',
					route: '/',
					active: false
				},
				{
					name: 'Банки',
					route: '/banks',
					active: true
				}
			]
		}
	},
	methods: {
		...mapMutations({
			setBanks:'banks/SET_BANKS'
		}),
		...mapActions({
			request: 'filters/filters/request',
		}),
	},
	async fetch() {
		let response = await this.request({query: banks, variables: {}})
		await this.setBanks(response.data.banks)
	}
}
</script>