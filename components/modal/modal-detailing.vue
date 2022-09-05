<template>
	<div class="modal__wrap">
		<div class="application application--modal grid__col-12 grid grid--application grid--application-modal">
			<div class="application__form grid__col-4">
				<div class="heading-group heading-group--form">
					<div class="heading-group__wrap">
						<h2 class="heading heading--h2">Закажите услугу</h2>
						<span class="heading-group__label">Перезвоним в течение 5 минут</span>
					</div>
				</div>
				<form-detailing :data="modalData"/>
			</div>
			<div class="application__catalog application__catalog--modal catalog grid__col-4">
				<div class="detailing__item">
					<div class="detailing__main">
						<picture-component
								classes="detailing__img lazyload"
								:small="modalData.images[0].medium"
								:small-webp="modalData.images[0].medium_webp"
								:big="modalData.images[0].large"
								:big-webp="modalData.images[0].large_webp" />
						<h2 class="heading heading--h2 detailing__title">{{ modalData.title }}</h2>
						<div class="deatailing__price-wrap">
							<span class="detailing__price">{{ modalData.price }}</span>
							<span class="detailing__sale">Еще -10% за онлайн-заявку</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
	computed: {
		...mapGetters({
			modalData: 'modal/modal-main/modalData',
		}),
	}
}
</script>