<template>
	
	<section class="page-main__thanks thanks grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{pageTitle}}
					<span class="heading__promo"></span>
				</h1>
				<span class="heading-group__label">Автокредит предварительно одобрен</span>
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
				<div class="text__content">
					
					<p class="text__p">{{ userName }}, автомобиль {{ userCar.mark.title }} {{ userCar.folder.title }}
					                   {{ userCar.generation.name }} {{ userCar.engine_volume }}
					                   {{ userCar.gearbox.title }} ({{ userCar.engine_power }} л.с.) {{ userCar.year }} закреплен
					                   за вашей
					
					                   заявкой #838280. Менеджер свяжется с вами в ближайшее время. Спасибо, что выбрали нас!
					</p>
					<p class="text__p">После подтверждения заявки вас пригласят в автоцентр для прохождения бесплатного
					                   тест-драйва и оформления сделки. Обратите внимание, что оплата возможна как за наличные,
					                   так и посредством безналичного расчета.
					</p>
					<p class="text__p">И еще. Передайте менеджеру, что пришли по объявлению на CARRO, чтобы получить подарок и
					                   бесплатный комплект шин.
					</p>
				</div>
			</div>
			<div class="thanks__catalog catalog catalog--single grid__col-4">
				<catalog-item-small-desktop :has-buttons="false"
				                            :offer="userCar" />
			</div>
		</div>
		<div class="thanks__benefits grid__col-12">
			<benefits-car />
		</div>
	</section>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	props: {
		pageTitle: String
	},
	computed: {
		...mapGetters({
			userName: 'form/form/userName',
			userCar: 'form/form/userCar',
		})
	}
}
</script>