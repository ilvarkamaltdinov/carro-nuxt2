<template>
	<div class="application__banks">
		<div class="application__banks-form">
			<img class="application__banks-img application__banks-img--alfa"
			     :src="require(`~/assets/img/banks/logos/${bankSlug}.svg`)"
			     alt="bank" />
			<nuxt-link to="/banks-partners"
			           @click.native="banksClick"
			           class="application__banks-text">и еще 5 банков
			</nuxt-link>
		</div>
		<div class="application__form-img-wrap">
			<img :src="require(`~/assets/img/banks/images/${bankSlug}.png`)"
			     alt="bank" />
		</div>
	</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
	props: {
		bankSlug: {
			type: String,
			default: 'alfa-bank'
		}
	},
	methods:{
		...mapActions({
			closeModal: 'modal/modal-main/closeModal'
		}),
		async banksClick(){
			await this.closeModal()
		}
	}
}
</script>