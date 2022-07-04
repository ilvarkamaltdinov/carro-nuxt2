<template>
	<div class="page-main__credit-index grid__col-4">
		<div class="heading-group heading-group--form">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h2">
					Автокредит
					<span class="heading__promo"> 4.9%</span>
				</h2>
				<span class="heading-group__label">Получите 100% одобрение</span>
			</div>
			<rating :max="5" :rating="1" />
		</div>
		<form-credit :offer="currentCar" />
	</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			currentCar: 'modal/modal-choose/currentCar'
		})
	}
}
</script>




