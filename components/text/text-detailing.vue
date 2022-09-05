<template>
	<section class="page-main__text text grid__col-12">
		<h2 class="heading heading--h2">Об услуге</h2>
		<div class="grid">
			<div class="text__wrap text__wrap--figure grid__col-12">
				<div class="text__figure figure">
					<picture-component
							classes="text__figure-img lazyload"
							:small="`${require(`~/assets/img/figures/figure-6@1x.png`)}`"
							:small-webp="`${require(`~/assets/img/figures/figure-6@1x.webp`)}`"
							:big="`${require(`~/assets/img/figures/figure-6@2x.png`)}`"
							:big-webp="`${require(`~/assets/img/figures/figure-6@2x.webp`)}`" />
				</div>
				<div class="text__content">
					<p class="text__p">Хотите, чтобы Ваш автомобиль всегда выглядел, как с салона? Доверьте свое авто специалистам
					                   первого в столице детейлинг-центра. Бесконтактная химчистка, бережная полировка любого
					                   кузова, мойка двигателя до блеска, покраска сиденья, руля и много другое по лучшей цене в
					                   Москве.
					</p>
					<p class="text__p">Профессиональные специалисты точно диагностируют неполадку, проведут кузовной ремонт,
					                   починку двигателя, коробки передач или ходовой части со 100% гарантией качества.
					</p>
					<p class="text__p">Пишите в Whatsapp или звоните по телефону.</p>
					<div class="text__links">
						<a class="button button--icon button--link"
						   :href="`tel:${settings.phone_station}`">{{settings.phone_station}}
							<svg-icon name="icon-call"></svg-icon>
						</a>
						<a class="button button--icon button--link"
						   :href="`https://wa.me/${settings.phone_station_link}?text=Здравствуйте,%20я%20заинтересован%20в%детейлингге%своего%20авто.`">
							Написать в WhatsApp
							<svg-icon name="icon-whatsapp"></svg-icon>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			settings: 'settings/settings/settings'
		})
	}
}
</script>