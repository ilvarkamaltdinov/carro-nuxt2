<template>
	<div class="page-main__credit-index grid__col-4">
		<div class="heading-group heading-group--form">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h2">
					Автокредит
					<span class="heading__promo"> 4.9%</span>
				</h2>
				<span class="heading-group__label">Получите одобрение за 5 минут</span>
			</div>
			<rating :max="100" :rating="formProgress" />
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
		}),
		formProgress(){
			if(this.currentCar){
				return 60
			}
			else{
				return 30
			}
		}
	}
}
</script>




