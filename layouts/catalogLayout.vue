<template>
	<div>
		<Header />
		<modal-wrap />
		<Nuxt />
		<Footer />
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
// import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";
import offerFilters from "~/apollo/queries/offerFilters";
import offerUrl from "~/apollo/queries/offerUrl";

export default {
	// middleware: 'test',
	// mixins: [capitalizeFirstLetter],
	computed: {
		...mapGetters({
			lastUsedPage:'filters/filters/lastUsedPage'
		})
	},
	watch: {
		'$route'() {
			console.log('watch')
			console.log(this.lastUsedPage)
			this.checkUrl()
		}
	},
	async fetch() {
		if(this.lastUsedPage !== 'car'){
			await this.checkUrl()
		}
	},
	methods: {
		...mapMutations({
			setLastUsedPage: 'filters/filters/SET_LAST_USED_PAGE'
		}),
		async defineOfferUrl() {
			let variables = {
				site_id: this.$config.site_id,
				url: this.$route.path,
			}
			let client = await this.$apolloProvider.defaultClient
			return client.query({
				query: offerUrl,
				variables,
				fetchPolicy: 'no-cache' // TODO используется потому что иначе будет пипец
			})
		},
		async filterRequest(assignVariables) {
			let variables = {
				site_id: this.$config.site_id,
				url: this.$route.path,
			}
			let client = this.$apolloProvider.defaultClient
			let response = await client.query(
					{
						query: offerFilters,
						variables: Object.assign(variables, assignVariables),
						fetchPolicy: 'network-only'
					})
			await this.changingFilters(response.data.offerFilters)
			await this.changingOffers(response.data.offers)
		},
		async changingFilters(payload) {
			await this.$store.commit('filters/filters/SET_FILTERS', payload)
			await this.$store.commit('filters/filters/SET_ALL_CHOSEN', payload.chosen)
		},
		async changingOffers(payload) {
			await this.$store.commit('filters/filters/SET_OFFERS', payload)
			await this.$store.commit('filters/filters/SET_LOADING', false)
		},
		async checkUrl() {
			if (this.$route.params.car) {
				try {
					let response = await this.defineOfferUrl()
					let typeName = response.data.offerUrl.__typename
					let assignVariables = this._.pickBy(response.data.offerUrl)
					delete assignVariables.__typename;
					if (typeName === 'OfferUrlFilterPaginationType') {
						await this.$store.commit('filters/filters/SET_LOADING', true)
						await this.filterRequest(assignVariables)
					}
					else if (typeName === 'OfferUrlType') {
						this.setLastUsedPage('car')
					}
				} catch (e) {
					this.this.error({statusCode: 404})
				}
			}
			else {
				await this.$store.commit('filters/filters/SET_LOADING', true)
				let variables = {
					site_id: this.$config.site_id,
					url: this.$route.path,
					mark_slug_array: this.$stringToArray(this.$route.query.mark_slug_array),
					folder_slug_array: this.$stringToArray(this.$route.query.folder_slug_array),
					generation_slug_array: this.$stringToArray(this.$route.query.generation_slug_array),
					engine_type_id_array: this.$numberToArray(this.$route.query.engine_type_id_array),
					gearbox_id_array: this.$numberToArray(this.$route.query.gearbox_id_array),
					drive_type_id_array: this.$numberToArray(this.$route.query.drive_type_id_array),
					body_type_id_array: this.$numberToArray(this.$route.query.body_type_id_array),
				}
				try {
					let client = this.$apolloProvider.defaultClient
					let response = await client.query(
							{
								query: offerFilters,
								variables: this.$removeEmptyObjects(variables),
								fetchPolicy: 'network-only'
							})
					await this.changingFilters(response.data.offerFilters)
					await this.changingOffers(response.data.offers)
					
				} catch (error) {
					console.log(error)
					this.this.error({statusCode: 404})
				}
			}
		},
		
		
	}
	// async fetch() {
	// 	// await this.getFilters()
	// 	// console.log('layout fetch')
	// 	// this.setLoading(true)
	// 	// if (this.isOfferCLick) {
	// 	// 	this.setCarPage(true)
	// 	// 	return
	// 	// }
	// 	// this.setAllChosen({})
	// 	// let variables = {
	// 	// 	site_id: this.$config.site_id,
	// 	// }
	// 	// //TODO если обновил стр или перешел по прямой ссылке
	// 	// if (this.$route.name === 'used-mark-model-car') {
	// 	// 	try {
	// 	// 		let response = await this.defineOfferUrl()
	// 	// 		let typeName = response.data.offerUrl.__typename
	// 	// 		let assignVariables = response.data.offerUrl
	// 	// 		delete assignVariables.__typename;
	// 	// 		if (typeName === 'OfferUrlFilterPaginationType') {
	// 	// 			//ФИЛЬТР
	// 	// 			this.setCarPage(false)
	// 	// 			let response = await this.filterRequest({...variables, ...assignVariables})
	// 	// 			await this.setFilters(response.data.offerFilters)
	// 	// 			this.setAllChosen(response.data.offerFilters.chosen)
	// 	// 			this.setOffers(response.data.offers)
	// 	// 			this.setLoading(false)
	// 	// 		} else if (typeName === 'OfferUrlType') {
	// 	// 			//ТАЧКА
	// 	// 			this.setCarPage(true)
	// 	// 		}
	// 	// 	} catch (e) {
	// 	// 		this.this.error({statusCode: 404})
	// 	// 	}
	// 	// }
	// 	// else {
	// 	// 	try {
	// 	// 		let assignVariables = {
	// 	// 			url: this.$route.path,
	// 	// 			mark_slug_array: this.$stringToArray(this.$route.query.mark_slug_array),
	// 	// 			folder_slug_array: this.$stringToArray(this.$route.query.folder_slug_array),
	// 	// 			generation_slug_array: this.$stringToArray(this.$route.query.generation_slug_array),
	// 	// 			engine_type_id_array: this.$numberToArray(this.$route.query.engine_type_id_array),
	// 	// 			gearbox_id_array: this.$numberToArray(this.$route.query.gearbox_id_array),
	// 	// 			drive_type_id_array: this.$numberToArray(this.$route.query.drive_type_id_array),
	// 	// 			body_type_id_array: this.$numberToArray(this.$route.query.body_type_id_array),
	// 	// 		}
	// 	// 		let response = await this.filterRequest({...variables, ...assignVariables})
	// 	// 		this.setFilters(response.data.offerFilters)
	// 	// 		this.setAllChosen(response.data.offerFilters.chosen)
	// 	// 		this.setOffers(response.data.offers)
	// 	// 		this.setLoading(false)
	// 	// 	} catch (e) {
	// 	// 		this.this.error({statusCode: 404})
	// 	// 	}
	// 	// }
	// },
	// methods: {
	// 	...mapMutations({
	// 		setAllChosen: 'filters/filters/SET_ALL_CHOSEN',
	// 		setFilters: 'filters/filters/SET_FILTERS',
	// 		setOffers: 'filters/filters/SET_OFFERS',
	// 		setLoading: 'filters/filters/SET_LOADING',
	// 		setCarPage: 'filters/filters/SET_CAR_PAGE'
	// 	}),
	// 	...mapActions({
	// 		getFilters: 'filters/filters/getFilters'
	// 	}),
	// 	defineOfferUrl() {
	// 		let variables = {
	// 			site_id: this.$config.site_id,
	// 			url: this.$route.path,
	// 		}
	// 		let client = this.$apolloProvider.defaultClient
	//
	// 		return client.query(
	// 				{
	// 					query: offerUrl,
	// 					variables: this.$removeEmptyObjects(variables),
	// 					fetchPolicy: 'no-cache' // TODO используется потому что иначе будет пипец
	// 				})
	// 	}
	// },
	
}
</script>
