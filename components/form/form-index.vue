<template>
	<div class="page-main__credit-index grid__col-4">
		<form-credit :offer="currentCar" />
	</div>
</template>
<script>
import {mapGetters} from "vuex";

const FormCredit = () => import('@/components/form/form-credit')
export default {
	components: {
		FormCredit
	},
	computed: {
		...mapGetters({
			currentCar: 'modal/modal-choose/currentCar'
		}),
	}
}
</script>




