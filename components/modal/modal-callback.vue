<template>
	<div>
		<div class="modal__options" v-if="modalData.mark">
			<img class="modal__logo"
			     :src="require(`~/assets/img/dealers/logos/logo-${modalData.dealer.slug}.svg`)"
			     loading="lazy"
			     alt="" />
			<div class="modal__buttons">
				<button-call-modal :phone="modalData.dealer.phone" />
			</div>
		</div>
		<div class="modal__wrap">
			<div class="application application--modal grid__col-12 grid grid--application grid--application-modal">
				<div class="application__form grid__col-4">
					<div class="heading-group heading-group--form">
						<div class="heading-group__wrap">
							<h2 class="heading heading--h2">Обратный звонок</h2>
							<span class="heading-group__label">Перезвоним в течение 5 минут</span>
						</div>
					</div>
					<form-callback :offer="modalData" />
				</div>
				<div class="application__catalog application__catalog--modal catalog grid__col-4">
					<component :is="$device.isMobile ? 'catalog-item-large-mobile':'catalog-item-small-desktop'" v-if="!$device.isMobile && modalData.mark"
					           :is-form="true"
					           :has-buttons="false"
					           :offer="modalData" />
					<div v-if="modalData.dealerModal">
						<div class="dealers__item-img-wrap">
							<picture>
								<source type="image/webp"
								        media="(min-width: 768px)"
								        :data-srcset="`${modalData.images[0].small_webp} 1x, ${modalData.images[0].medium_webp} 2x`" />
								<img class="dealers__item-img lazyload"
								     :data-src="modalData.images[0].small"
								     :data-srcset="`${modalData.images[0].medium} 2x`"
								     loading="lazy"
								     alt="" />
							</picture>
						</div>
					</div>
				</div>
			</div>
			<benefits :has-modal="false"
			          modal
			          :benefits="benefitsCredit" />
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			modalData: 'modal/modal-main/modalData',
			benefitsCredit: 'benefits/benefitsCredit'
		}),
	}
}
</script>