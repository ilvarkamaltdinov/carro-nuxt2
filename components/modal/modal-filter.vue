<template>
	
	<section class="modal modal--credit">
		<div class="heading-group heading-group--modal">
			<div class="heading-group__wrap">
				<h2 class="heading heading--h1">Фильтр</h2>
			</div>
			<button class="modal__close"
			        @click="setModalMain(false)">
				<svg-icon class="modal__close-icon"
				          name="icon-close-s" />
			</button>
		</div>
		<div class="modal__wrap">
			<div class="filter filter--modal">
				<ul class="filter__menu-list">
					<li class="filter__menu-item">
						<div class="filter__menu-text">BMW, Audi, Mercedes-Benz + 3</div>
						<svg-icon class="filter__arrow"
						          name="icon-arrow" />
					</li>
					<li class="filter__menu-item">
						<div class="filter__menu-text">Модели</div>
						<svg-icon class="filter__arrow"
						          name="icon-arrow" />
					</li>
					<li class="filter__menu-item">
						<div class="filter__menu-text">Поколение</div>
						<svg-icon class="filter__arrow"
						          name="icon-arrow" />
					</li>
					<li class="filter__menu-item">
						<div class="filter__menu-text">Двигатель</div>
						<svg-icon class="filter__arrow"
						          name="icon-arrow" />
					</li>
					<li class="filter__menu-item">
						<div class="filter__menu-text">КПП</div>
						<svg-icon class="filter__arrow"
						          name="icon-arrow" />
					</li>
					<li class="filter__menu-item">
						<div class="filter__menu-text">Привод</div>
						<svg-icon class="filter__arrow"
						          name="icon-arrow" />
					</li>
				</ul>
				<div class="filters__more">
					<button-show>Больше фильтров</button-show>
				</div>
				<ul class="filter__menu-list filter__menu-list--more">
					<li class="filter__menu-group">
						<h2 class="heading heading--h3">Цена</h2>
						<range-price />
					</li>
					<li class="filter__menu-group">
						<h2 class="heading heading--h3">Год</h2>
						<range-year />
					</li>
				</ul>
			</div>
			<div class="page-main__button-fixed">
				<button-fixed />
			</div>
		</div>
	</section>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
	methods: {
		...mapMutations({
			setModalMain: 'modal/modal-main/SET_MODAL_MAIN',
		})
	}
}
</script>