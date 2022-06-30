<template>
	<div class="modal__wrap">
		<div class="application application--modal grid__col-12 grid grid--application grid--application-modal">
			<div class="application__form grid__col-4">
				<div class="heading-group heading-group--form">
					<div class="heading-group__wrap">
						<h2 class="heading heading--h2">Автокредит
							<span class="heading__promo"> 4.9%</span>
						</h2>
						<span class="heading-group__label">Получите 100% одобрение</span>
					</div>
					<rating-form />
				</div>
				<form-credit :has-chose="false" :offer="modalData"/>
			</div>
			<div class="application__catalog application__catalog--modal catalog grid__col-4">
				<component :is="component" :has-buttons="false" :offer="modalData"/>
			</div>
			<application-banks class="grid__col-4"/>
		</div>
		<benefits-modal />
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			modalData: 'modal/modal-main/modalData'
		}),
		component(){
			return  this.$device.isMobile ? 'catalog-item-large-mobile' : 'catalog-item-small-desktop'
		}
	},
}
</script>