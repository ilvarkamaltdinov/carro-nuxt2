<template>
	<section class="page-main__featured featured featured--banks grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ pageTitle }}</h1>
				<span class="heading-group__label">Подайте заявку на автокредит в любой банк</span>
			</div>
		</div>
		<ul class="featured__list grid__col-12 grid grid--featured featured__banks">
			<li v-if="tinkoff"
			    class="featured__item featured__item--sedan featured__item--tinkoff">
				<nuxt-link :to="`/credit/${tinkoff.slug}`"
				           class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">{{ tinkoff.name }}</h3>
						<div class="featured__text">от {{ tinkoff.rate }} %</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="7" />
					</div>
				</nuxt-link>
			</li>
			<li v-if="sovkombank"
			    class="featured__item featured__item--family featured__item--sovcom">
				<nuxt-link :to="`/credit/${sovkombank.slug}`"
				           class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">{{ sovkombank.name }}</h3>
						<div class="featured__text">от {{ sovkombank.rate }} %</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="8" />
					</div>
				</nuxt-link>
			</li>
			<li v-if="vtb"
			    class="featured__item featured__item--women featured__item--vtb">
				<nuxt-link :to="`/credit/${vtb.slug}`"
				           class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">{{ vtb.name }}</h3>
						<div class="featured__text">от {{ vtb.rate }} %</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="9" />
					</div>
				</nuxt-link>
			</li>
			<li v-if="sberbank"
			    class="featured__item featured__item--business featured__item--sber">
				<nuxt-link :to="`/credit/${sberbank.slug}`"
				           class="featured__link"
				           href="">
					<div class="featured__about">
						<h3 class="featured__title">{{ sberbank.name }}</h3>
						<div class="featured__text">от {{ sberbank.rate }} %</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="10" />
					</div>
				</nuxt-link>
			</li>
			<li v-if="alfa"
			    class="featured__item featured__item--allroad featured__item--alfa">
				<nuxt-link :to="`/credit/${alfa.slug}`"
				           class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">{{ alfa.name }}</h3>
						<div class="featured__text">от {{ alfa.rate }} %</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="11" />
					</div>
				</nuxt-link>
			</li>
			<li v-if="raiffeisen"
			    class="featured__item featured__item--taxi featured__item--reif">
				<nuxt-link :to="`/credit/${raiffeisen.slug}`"
				           class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">{{ raiffeisen.name }}</h3>
						<div class="featured__text">от {{ raiffeisen.rate }}%</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="12" />
					</div>
				</nuxt-link>
			</li>
		</ul>
		<section class="banks grid__col-12">
			<h2 class="heading heading--h2">Рейтинг банков</h2>
			<ul class="banks__list grid">
				<li class="banks__item"
				    v-for="bank in banks"
				    :key="bank.id">
					<div class="banks__main">
						<img class="banks__img"
						     :src="bank.image"
						     alt="" />
						<tippy arrow>
							<div class="tippy__text">
								рейтинг банка
							</div>
							<template v-slot:trigger>
								<rating bank :max="100" :rating="bank.rating" />
							</template>
						</tippy>
					
					</div>
					<ul class="banks__info">
						<li class="banks__info-item">Заявок в месяц
							<span class="banks__info-number">{{ bank.request }}</span>
						</li>
						<li class="banks__info-item">Одобрено автокредитов
							<span class="banks__info-number">{{ bank.approval }}</span>
						</li>
						<li class="banks__info-item">Процентная ставка
							<span class="banks__info-number banks__info-number--stake">{{ bank.rate }}%</span>
						</li>
					</ul>
					<button-typical text="Оставить заявку"
					                @click="$router.push(`/credit/${bank.slug}`)"
					                button-class="button--credit" />
				</li>
			</ul>
		</section>
	</section>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import banks from "@/apollo/queries/bank/banks";

export default {
	props: {
		pageTitle: String
	},
	computed: {
		...mapGetters({
			banks: 'banks/banks',
			tinkoff: 'banks/tinkoff',
			sberbank: 'banks/sberbank',
			raiffeisen: 'banks/raiffeisen',
			alfa: 'banks/alfa',
			sovkombank: 'banks/sovkombank',
			vtb: 'banks/vtb',
		})
	},
	methods: {
		...mapMutations({
			setBanks: 'banks/SET_BANKS'
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