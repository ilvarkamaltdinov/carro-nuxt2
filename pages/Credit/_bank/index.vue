<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs"/>
		</div>
		<div class="grid grid--container">
			<application-credit />
			<benefits-car/>
			<text-credit/>
		</div>
	</main>
</template>
<script>
import {mapActions, mapMutations} from "vuex";
import bank from "@/apollo/queries/bank";

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
					name: 'Автокредит',
					route: '/credit',
					active: true
				}
			]
		}
	},
	methods:{
		...mapActions({
			request: 'filters/filters/request',
		}),
		...mapMutations({
			setBank:'banks/SET_BANK'
		})
	},
	async fetch() {
		let response = await this.request({query: bank, variables: {slug:this.$route.params.bank}})
		try{
			await this.setBank(response.data.bank)
		}
		catch (error){
			console.log(1111, error)
		}
	},

}
</script>