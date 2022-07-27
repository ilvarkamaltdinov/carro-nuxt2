<template>
	<section class="page-main__thanks thanks grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ pageTitle }}
					<span class="heading__promo"></span>
				</h1>
				<span class="heading-group__label">{{ currentTitle }}</span>
			</div>
		</div>
		<div class="thanks__block grid__col-12 grid text">
			<div class="grid__col-8 text__wrap text__wrap--figure">
				<div class="text__figure figure">
					<picture>
						<source type="image/webp"
						        media="(min-width: 768px)"
						        :data-srcset="`${require(`~/assets/img/figures/figure-1@1x.webp`)} 1x, ${require(`~/assets/img/figures/figure-1@2x.webp`)} 2x`" />
						<source media="(min-width: 768px)"
						        :data-srcset="`${require(`~/assets/img/figures/figure-1@1x.png`)} 1x, ${require(`~/assets/img/figures/figure-1@2x.png`)} 2x`" />
						<img class="text__figure-img lazyload"
						     data-src="img/figures/figure-1@1x.png"
						     :data-srcset="`${require(`~/assets/img/figures/figure-1@2x.png`)} 2x`"
						     alt="" />
					</picture>
				</div>
				<div class="text__content"
				     v-html="currentText"></div>
			</div>
			<div v-if="userCar"
			     class="thanks__catalog catalog catalog--single grid__col-4">
				<component :is="$device.isMobile ? 'catalog-item-large-mobile' :'catalog-item-small-desktop'" :is-form="true" :has-buttons="false"
				                            :offer="userCar" />
			</div>
		</div>
		<div class="thanks__benefits grid__col-12">
			<benefits :benefits="benefitsCar" />
		</div>
	</section>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	props: {
		pageTitle: String
	},
	data() {
		return {
			titles: {
				'credit': 'Автокредит предварительно одобрен',
				'buyout': 'Заявка на выкуп автомобиля',
				'callback': 'Обратный звонок',
				'paid-selection': 'Заявка на автоподбор',
				'trade-in': 'TradeIn предварительно одобрен',
				'hire-purchase': 'Рассрочка предварительно одобрена',
				'station': 'Заявка на услугу',
			},
		}
	},
	methods: {
		...mapMutations({
			clear: 'form/form/CLEAR_DATA'
		}),
		sendMyTarget() {
			if (process.client) {
				_tmr.push({
					type: 'itemView',
					productid: this.userCar.external_id,
					pagetype: 'purchase',
					list: '1',
					totalvalue: this.userCar.price,
				})
			}
		},
		sendYandexCommercial() {
			if (process.client) {
				dataLayer.push({
					"ecommerce": {
						"purchase": {
							"actionField": {
								"id": this.userOrderId,
								"goal_id": this.settings.goal_id,
							},
							"products": [
								{
									"id": this.userCar.external_id,
									"name": `${this.userCar.mark.title} ${this.userCar.folder.title}, ${this.userCar.year} года, ${this.userCar.gearbox.title} ${this.userCar.price} руб. - ${this.userCar.external_id}`,
									"price": this.userCar.price,
									"brand": this.userCar.mark.title,
									"category": `'С пробегом/${this.userCar.mark.title}/${this.userCar.folder.title}/${this.userCar.name}`,
									"quantity": 1
								}
							]
						}
					}
				})
			}
		}
	},
	async mounted() {
		if(!this.userOrderId){
			await this.$router.push('/')
		}
		if (this.userCar) {
			this.sendYandexCommercial()
			this.sendMyTarget()
		}
	},
	destroyed() {
		this.clear()
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings/settings',
			formType: 'form/form/formType',
			userName: 'form/form/userName',
			userCar: 'form/form/userCar',
			benefitsCar: 'benefits/benefitsCar',
			userOrderId: 'form/form/userOrderId'
		}),
		currentTitle() {
			return this.titles[this.formType]
		},
		currentText() {
			return this.texts[this.formType]
		},
		texts() {
			return {
				'credit': `
						<p class="text__p"> ${this.userName}, автомобиль ${this.userCar?.mark.title}
						${this.userCar?.folder.title}
						${this.userCar?.generation?.name}
						${this.userCar?.engine_volume}
						${this.userCar?.gearbox.title}
						(${this.userCar?.engine_power} л.с.)
						${this.userCar?.year} закреплен за вашей заявкой <b>#${this.userOrderId}</b>.</p>
						<p class="text__p"> Менеджер свяжется с вами в ближайшее время. Спасибо, что выбрали нас!</p>
						<p class="text__p"> После подтверждения заявки вас пригласят в автоцентр для прохождения бесплатного
            тест-драйва и оформления сделки. Обратите внимание, что оплата возможна как за наличные,
            так и посредством безналичного расчета!</p>
						<p class="text__p">И еще. Передайте менеджеру, что пришли по объявлению на CARRO, чтобы получить подарок и бесплатный комплект шин.</p>`,
				'trade-in': `
						<p class="text__p"> ${this.userName}, автомобиль ${this.userCar?.mark.title}
						${this.userCar?.folder.title}
						${this.userCar?.generation?.name}
						${this.userCar?.engine_volume}
						${this.userCar?.gearbox.title}
						(${this.userCar?.engine_power} л.с.)
						${this.userCar?.year} закреплен за вашей заявкой <b>#${this.userOrderId}</b>.</p>
						<p class="text__p"> Менеджер свяжется с вами в ближайшее время. Спасибо, что выбрали нас!</p>
						<p class="text__p"> После подтверждения заявки вас пригласят в автоцентр для прохождения бесплатного
            тест-драйва и оформления сделки. Обратите внимание, что оплата возможна как за наличные,
            так и посредством безналичного расчета!</p>
						<p class="text__p">И еще. Передайте менеджеру, что пришли по объявлению на CARRO, чтобы получить подарок и бесплатный комплект шин.</p>`,
				'hire-purchase': `
						<p class="text__p"> ${this.userName}, автомобиль ${this.userCar?.mark.title}
						${this.userCar?.folder.title}
						${this.userCar?.generation?.name}
						${this.userCar?.engine_volume}
						${this.userCar?.gearbox.title}
						(${this.userCar?.engine_power} л.с.)
						${this.userCar?.year} закреплен за вашей заявкой <b>#${this.userOrderId}</b>.</p>
						<p class="text__p"> Менеджер свяжется с вами в ближайшее время. Спасибо, что выбрали нас!</p>
						<p class="text__p"> После подтверждения заявки вас пригласят в автоцентр для прохождения бесплатного
            тест-драйва и оформления сделки. Обратите внимание, что оплата возможна как за наличные,
            так и посредством безналичного расчета!</p>
						<p class="text__p">И еще. Передайте менеджеру, что пришли по объявлению на CARRO, чтобы получить подарок и бесплатный комплект шин.</p>`,
				'callback': `
						<p class="text__p"> ${this.userName}, благодарим за обращение. Ваша заявка - <b>#${this.userOrderId}</b>.</p>
						<p class="text__p"> Менеджер свяжется с вами в ближайшее время. Спасибо, что выбрали нас!</p>`,
				'buyout': `
						<p class="text__p"> ${this.userName}, благодарим за обращение. Ваша заявка - <b>#${this.userOrderId}</b>.</p>
						<p class="text__p"> Менеджер свяжется с вами в ближайшее время. Спасибо, что выбрали нас!</p>`,
				'station': `
						<p class="text__p"> ${this.userName}, благодарим за обращение. Ваша заявка - <b>#${this.userOrderId}</b>.</p>
						<p class="text__p"> Менеджер свяжется с вами в ближайшее время. Спасибо, что выбрали нас!</p>`,
				'paid-selection': `
						<p class="text__p"> ${this.userName}, благодарим за обращение. Ваша заявка - <b>#${this.userOrderId}</b>.</p>
						<p class="text__p"> Менеджер свяжется с вами в ближайшее время. Спасибо, что выбрали нас!</p>`,
			}
		}
	},
}
</script>