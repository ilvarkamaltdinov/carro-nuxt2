<template>
	<div class="page-main__credit-index grid__col-4">
		<form-credit calculator :offer="currentCar" />
	</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			currentCar: 'modal/modal-choose/currentCar'
		}),
	}
}
</script>




