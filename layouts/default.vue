<template>
	<div>
		<transition name="slide-fade">
			<!--TODO анимация главной модалки-->
			<component v-if="modal"
			           is="modal"></component>
			<!--<div v-if="modalMain">-->
			<!--	<component is="modal"></component>-->
			<!--</div>-->
		</transition>
		<Header />
		<transition name="fade">
			<!--TODO анимация главной модалки-->
			<div v-if="modal"
			     @click="closeModal()"
			     class="overlay"></div>
		</transition>
		<Nuxt />
		<Footer />
	</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
	methods: {
		...mapActions({
			closeModal: 'modal/modal-main/closeModal'
		})
	},
	computed: {
		...mapGetters({
			modal: 'modal/modal-main/modal',
			modalMenu: 'modal/modal-menu/modalMenu',
			modalMain: 'modal/modal-main/modalMain',
			modalMainComponent: 'modal/modal-main/modalMainComponent',
		})
	}
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
	transition: opacity .16s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
	opacity: 0;
}


.slide-fade-enter-active {
	transition: all .24s ease;
}

.slide-fade-leave-active {
	transition: all .24s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active до версии 2.1.8 */
{
	transform: translateY(48px);
	opacity: 0;
}


@media screen and (min-width: 1200px) {
	.fade-enter-active, .fade-leave-active {
		transition: opacity .16s;
	}
	
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
	{
		opacity: 0;
	}
	
	
	.slide-fade-enter-active {
		transition: all .24s ease;
	}
	
	.slide-fade-leave-active {
		transition: all .24s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter, .slide-fade-leave-to
		/* .slide-fade-leave-active до версии 2.1.8 */
	{
		transform: translateX(48px);
		opacity: 0;
	}
}


</style>