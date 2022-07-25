<template>
	<section class="page-main__text text grid__col-12">
		<h2 class="heading heading--h2">Об услуге</h2>
		<div class="grid">
			<div class="text__wrap text__wrap--figure grid__col-12">
				<div class="text__figure figure">
					<picture>
						<source media="(min-width: 768px)"
						        type="image/webp"
						        data-srcset="~/assets/img/figures/figure-2@2x.webp" />
						<source media="(min-width: 768px)"
						        :data-srcset="`${require('~/assets/img/figures/figure-2@1x.webp')} 1x, ${require('~/assets/img/figures/figure-2@1x.webp')} 2x`" />
						<img class="text__figure-img lazyload"
						     data-src="~/assets/img/figures/figure-2@1x.png"
						     :data-srcset="`${require('~/assets/img/figures/figure-2@2x.png')} 2x`"
						     alt="Кредит" />
					</picture>
				</div>
				<div v-if="text" class="text__content" v-html="text"></div>
				<div v-else class="text__content">
					<p class="text__p">Благодаря нашим кредитным программам Вы сможете наслаждаться автомобилем уже сегодня без
					                   больших единовременных затрат. CARRO выступает в роли кредитного брокера, подбирая для Вас
					                   автоцентры и банки с лучшими условиями автокредитования.
					</p>
					<p class="text__p">Мы возьмем на себя подбор оптимальной кредитной программы и оформление сопутствующих
					                   документов. Вам остается лишь выбрать подходящий автомобиль и заполнить кредитную заявку
					                   для предварительного одобрения.
					</p>
					<p class="text__p">После звонка кредитного эксперта приезжайте в автоцентр, пробуйте понравившийся автомобиль
					                   в рамках бесплатного тест-драйва и оформляйте автокредит прямо в салоне без необходимости
					                   обращения в отделение банка-партнера.
					</p>
					<p class="text__p">Преимущества автокредита carro.ru:</p>
					<ul class="text__list">
						<li class="text__list-item">Низкая ставка {{ settings.credit_percent }}</li>
						<li class="text__list-item">Первоначальный взнос от 0%</li>
						<li class="text__list-item">Trade-In как первый взнос</li>
						<li class="text__list-item">Зимняя резина в подарок</li>
					</ul>
				</div>
			
			</div>
		</div>
	</section>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	props: {
		text: String
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings/settings'
		})
	}
}
</script>