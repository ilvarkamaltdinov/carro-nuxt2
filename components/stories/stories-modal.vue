<template>
	<div class="stories stories--modal">
		<div class="stories__modal-wrap">
			<!--TODO кнопка закрытия сториз нужна ли? и если нужна сделать больше z-index-->
			<button class="stories__close" @click="closeStories()">
				<svg-icon class="stories__close-icon"
				          name="icon-close-s"/>
			</button>
			<div class="swiper swiper--progress swiper--stories-modal">
				<div class="swiper-pagination"></div>
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="stories__modal">
							<div class="stories__offer">
								<h2 class="heading heading--h2">Выгодный автокредит от 3.9% годовых без первого взноса</h2>
								<p class="stories__modal-text"> Подарки, выгодная процентная ставка, Trade-In как первый взнос.</p>
							</div>
							<div class="stories__modal-img-wrap">
								<!--<nuxt-picture quality="100" :imgAttrs="{class:'stories__modal-img'}" :src="`img/stories/stories-modal/stories-modal-1@2x.png`"/>-->
							</div>
							<button-typical text="Заявка на автокредит" class="button--link button--more"/>
						</div>
					</div>
				</div>
				<button class="swiper-button swiper-button-prev">
					<svg-icon class="swiper-button__icon"
					          name="icon-arrow"></svg-icon>
				</button>
				<button class="swiper-button swiper-button-next">
					<svg-icon class="swiper-button__icon"
					          name="icon-arrow"></svg-icon>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions, mapMutations} from "vuex";

export default {
	methods: {
		...mapActions({
			closeStories: 'stories/stories/closeStories'
		})
	},
}
</script>