<template>
	<main class="page-main">
		<div class="grid">
			<crumbs :crumbs="crumbs" />
		</div>
		<div class="grid grid--container">
			<thanks v-if="userCar"/>
		</div>
	</main>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			crumbs: [
				{
					name: 'Главная',
					route: '/',
					active: false
				},
				{
					name: 'Заявка успешно отправлена',
					route: '/thanks',
					active: true
				}
			]
		}
	},
	computed: {
		...mapGetters({
			userCar: 'form/form/userCar',
		})
	}
}
</script>