<template>
	<section class="modal modal--credit">
		<div class="heading-group heading-group--modal">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h1">Закажите звонок по автомобилю</h2>
				<span class="heading-group__label">{{ callbackCar.name }}</span>
			</div>
			<button class="modal__close"
			        @click="setModalMain(false)">
				<svg-icon class="modal__close-icon"
				          name="icon-close-s" />
			</button>
		</div>
		<div class="modal__options">
			<img class="modal__logo"
			     src="~/static/img/dealers/logos/logo-autograd.svg"
			     loading="lazy"
			     alt="" />
			<div class="modal__buttons">
				<button-call-modal />
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
					<form-car-callback />
				</div>
				<div class="application__catalog application__catalog--modal catalog grid__col-4">
					<catalog-item :has-buttons="false" :info="callbackCar"/>
				</div>
			</div>
			<benefits-modal />
		</div>
	</section>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import filters from "~/mixins/filters";

export default {
	mixins: [filters],
	computed: {
		...mapGetters({
			callbackCar: 'modal/modal-callback/callbackCar'
		}),
	},
	methods:{
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN',
		})
	},
	props: {
		info: {
			type: Object,
			default: () => {
			}
		}
	}
}
</script>