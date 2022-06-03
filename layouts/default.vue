<template>
	<div>
		<transition name="modal">
			<!--TODO анимация главной модалки-->
			<div v-if="modalMain">
				<component :is="modalMainComponent"></component>
			</div>
		</transition>
		<Header />
		<transition name="modal">
			<!--TODO анимация главной модалки-->
			<div v-if="modalMain" class="overlay"></div>
		</transition>
		<Nuxt />
		<Footer />
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			modalMenu: 'modal/modal-menu/modalMenu',
			modalMain: 'modal/modal-main/modalMain',
			modalMainComponent: 'modal/modal-main/modalMainComponent',
		})
	}
}
</script>
<!--<style lang="scss">-->
<!--.modal-enter-active,-->
<!--.modal-leave-active {-->
<!--	transition: opacity 0.5s ease;-->
<!--}-->

<!--.modal-enter-from,-->
<!--.modal-leave-to {-->
<!--	opacity: 0;-->
<!--}-->
<!--</style>-->
