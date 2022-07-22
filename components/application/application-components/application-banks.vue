<template>
	<div class="application__banks">
		<div class="application__banks-form">
			<img class="application__banks-img"
			     :class="`application__banks-img--${bankSlug}`"
			     :src="bankLogo"
			     alt="bank" />
			<nuxt-link to="/banks-partners"
			           @click.native="banksClick"
			           class="application__banks-text">и еще 25 банков
			</nuxt-link>
		</div>
		<div class="application__form-img-wrap">
			<img :src="bankImage"
			     alt="bank" />
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			bank: 'banks/bank'
		}),
		bankSlug() {
			return this.bank.slug ? this.bank.slug : ''
		},
		bankLogo() {
			return this.bank.image ? this.bank.image : require('~/assets/img/banks/logo-alfa.svg')
		},
		bankImage() {
			return this.bank.image_car ? this.bank.image_car.small_webp : require('~/assets/img/banks/image-alfa.png')
		}
	},
	methods: {
		...mapActions({
			closeModal: 'modal/modal-main/closeModal'
		}),
		async banksClick() {
			await this.closeModal()
		}
	}
}
</script>