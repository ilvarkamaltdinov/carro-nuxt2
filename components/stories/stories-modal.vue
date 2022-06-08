<template>
	<div class="stories stories--modal">
		<div class="stories__modal-wrap">
			<!--TODO кнопка закрытия сториз нужна ли? и если нужна сделать больше z-index-->
			<button class="stories__close" @click="setStoriesModal(false)">
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
								<picture>
									<source type="image/webp"
									        media="(min-width: 768px)"
									        srcset="img/stories/stories-modal/stories-modal-1@1x.webp 1x, img/stories/stories-modal/stories-modal-1@2x.webp 2x" />
									<source media="(min-width: 768px)"
									        srcset="img/stories/stories-modal/stories-modal-1@1x.png 1x, img/stories/stories-modal/stories-modal-1@2x.png 2x" />
									<img class="stories__modal-img"
									     src="img/stories/stories-modal/stories-modal-1@1x.png"
									     srcset="img/stories/stories-modal/stories-modal-1@2x.png 2x"
									     loading="lazy"
									     alt="" />
								</picture>
							</div>
							<button-more>Заявка на автокредит</button-more>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="stories__modal">
							<div class="stories__offer">
								<h2 class="heading heading--h2">Выгодный автокредит от 3.9% годовых без первого взноса</h2>
								<p class="stories__modal-text"> Подарки, выгодная процентная ставка, Trade-In как первый взнос.</p>
							</div>
							<div class="stories__modal-img-wrap">
								<picture>
									<source type="image/webp"
									        media="(min-width: 768px)"
									        srcset="img/stories/stories-modal/stories-modal-1@1x.webp 1x, img/stories/stories-modal/stories-modal-1@2x.webp 2x" />
									<source media="(min-width: 768px)"
									        srcset="img/stories/stories-modal/stories-modal-1@1x.png 1x, img/stories/stories-modal/stories-modal-1@2x.png 2x" />
									<img class="stories__modal-img"
									     src="img/stories/stories-modal/stories-modal-1@1x.png"
									     srcset="img/stories/stories-modal/stories-modal-1@2x.png 2x"
									     loading="lazy"
									     alt="" />
								</picture>
							</div>
							<button-more>Заявка на автокредит</button-more>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="stories__modal">
							<div class="stories__offer">
								<h2 class="heading heading--h2">Выгодный автокредит от 3.9% годовых без первого взноса</h2>
								<p class="stories__modal-text"> Подарки, выгодная процентная ставка, Trade-In как первый взнос.</p>
							</div>
							<div class="stories__modal-img-wrap">
								<picture>
									<source type="image/webp"
									        media="(min-width: 768px)"
									        srcset="img/stories/stories-modal/stories-modal-1@1x.webp 1x, img/stories/stories-modal/stories-modal-1@2x.webp 2x" />
									<source media="(min-width: 768px)"
									        srcset="img/stories/stories-modal/stories-modal-1@1x.png 1x, img/stories/stories-modal/stories-modal-1@2x.png 2x" />
									<img class="stories__modal-img"
									     src="img/stories/stories-modal/stories-modal-1@1x.png"
									     srcset="img/stories/stories-modal/stories-modal-1@2x.png 2x"
									     loading="lazy"
									     alt="" />
								</picture>
							</div>
							<button-more>Заявка на автокредит</button-more>
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
<style>
.stories__close{
	z-index: 200;
}
</style>
<script>
import {mapMutations} from "vuex";

export default {
	methods: {
		...mapMutations({
			setStoriesModal: 'stories/stories/SET_STORIES_MODAL'
		})
	},
}
</script>