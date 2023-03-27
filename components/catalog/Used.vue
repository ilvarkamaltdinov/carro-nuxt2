<template>
	<div class="grid grid--container">
		<section class="page-main__catalog catalog grid catalog--used">
			<div class="benefits grid__col-12 benefits--mobile">
				<ul class="benefits__list">
					<li class="benefits__item">
						<div class="benefits__link">
							<img src="~/assets/img/autoteka.svg"
							     alt="Эмблема Автотеки — carro.ru"
							     height="16"
							     width="16"
							     class="benefits__icon icon" />
							<div class="benefits__text">
								Все автомобили
								<div class="benefits__text-strong">
									Проверены в Автотеке
								</div>
							</div>
						</div>
					</li>
					<li class="benefits__item">
						<nuxt-link to="/credit"
						           class="benefits__link">
							<svg-icon class="benefits__icon icon"
							          name="icon-credit-card" />
							<div class="benefits__text">
								Скидка до 300 000 ₽
								<div class="benefits__text-strong">
									при покупке авто в кредит
								</div>
							</div>
						</nuxt-link>
					</li>
					<li class="benefits__item">
						<div class="benefits__link">
							<svg-icon class="benefits__icon icon"
							          name="icon-insurance" />
							<div class="benefits__text">
								ОСАГО в подарок
								<div class="benefits__text-strong">
									за заявку на автокредит
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="heading-group heading-group--catalog heading-group--h1 grid__col-12">
				<div class="heading-group__wrap">
					<h1 class="heading heading--h1">{{ pageTitle }}</h1>
				</div>
			</div>
			<catalog-marks v-if="showMarkTabs" />
			<catalog-sub-filters />
			<!--TODO offers для страницы дилеров-->
			<catalog-offers v-if="offers" />
			<div class="grid__col-4"
			     v-if="!$device.isMobile">
				<filter-desktop />
			</div>
			<div class="grid__col-8"
			     ref="catalog">
				<filter-sort />
				<component
						:is="$device.isMobileOrTablet
              ? 'catalog-list-used-mobile'
              : 'catalog-list-used-desktop'
          "
				/>
			</div>
		</section>
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";
import markFolderGeneration from "@/apollo/queries/markFolderGeneration";

export default {
	watch: {
		'$route'() {
			this.getCategoryMarks()
		},
	},
	mixins: [capitalizeFirstLetter],
	props: {
		pageTitle: String,
		offers: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapGetters({
			commMarks: 'marks/marks/commMarks',
			europeMarks: 'marks/marks/europeMarks'
		}),
		showMarkTabs() {
			return (this.$route.params.category === "used" || this.$route.params.category === "commercial" || this.$route.params.category === "europe")
					&& !this.$route.params.mark;
		}
	},
	methods: {
		...mapActions({
			request: 'request'
		}),
		...mapMutations({
			setCommMarks: 'marks/marks/SET_COMM_MARKS',
			setEuropeMarks: 'marks/marks/SET_EUROPE_MARKS'
		}),
		async getCategoryMarks() {
			switch (this.$route.params.category) {
				case 'commercial':
					if (!this.commMarks.length) {
						await this.getComm()
					}
					break
				case 'europe':
					if (!this.europeMarks.length) {
						await this.getEurope()
					}
					break
			}
		},
		async getComm() {
			try {
				let response = await this.request({
					query: markFolderGeneration,
					variables: {
						category: 'commercial'
					}
				})
				const commMarks = response.data.markFolderGeneration
				await this.setCommMarks(commMarks)
				return commMarks
				
			} catch (error) {
				console.log(error)
			}
		},
		async getEurope() {
			try {
				let response = await this.request({
					query: markFolderGeneration,
					variables: {
						category: 'europe'
					}
				})
				const europeMarks = response.data.markFolderGeneration
				await this.setEuropeMarks(europeMarks)
				return europeMarks
				
			} catch (error) {
				console.log(error)
			}
		},
	},
	async fetch() {
		await this.getCategoryMarks()
	}
};
</script>
