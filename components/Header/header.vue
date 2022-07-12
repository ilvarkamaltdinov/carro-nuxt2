<template>
	<header class="page-header">
		<div class="page-header__container grid grid--header">
			<div class="page-header__wrap grid__col-12">
				<div class="page-header__logo-block">
					<label class="page-header__toggle hamburger"
					       @change="burgerClick()"
					       for="hamburger">
						<input id="hamburger"
						       :checked="modalMenu"
						       type="checkbox" />
						<span class="hamburger__element"></span>
						<span class="hamburger__element"></span>
						<span class="hamburger__element"></span>
						<span class="visually-hidden">Меню сайта</span>
					</label>
					<nuxt-link class="page-header__logo"
					           to="/">
						<div class="page-header__logo-img-wrap">
							<img src="~/assets/img/logo-part-1.svg"
							     alt="Портал проверенных автомобилей с пробегом — carro.ru"
							     height="24"
							     width="24"
							     class="page-header__logo-circle">
							<img src="~/assets/img/logo-part-2.svg"
							     alt="Портал проверенных автомобилей с пробегом — carro.ru"
							     height="13"
							     width="79"
							     class="page-header__logo-letters">
						</div>
					</nuxt-link>
					<div class="page-header__search page-header__search--form form">
						<label class="form__field-wrap form__field-wrap--search"
						       for="filter-search">
							<input class="form__field"
							       id="filter-search"
							       type="search"
							       placeholder="Поиск по маркам"
							       value="" />
							<svg-icon class="form__icon-search icon"
							          name="icon-search" />
						</label>
					</div>
				</div>
				<nav class="main-nav page-header__nav page-header__nav--desktop">
					<site-list-desktop />
				</nav>
				<ul class="page-header__buttons">
					<li class="page-header__buttons-item"
					    v-if="$device.isMobile">
						<a class="page-header__buttons-link"
						   href="">
							<svg-icon class="icon"
							          name="icon-search" />
						</a>
					</li>
					<li class="page-header__buttons-item">
						<nuxt-link to="/favorites"
						           class="page-header__buttons-link">
							<span v-if="likesArray.length"
							      class="page-header__favorites-count">{{ likesArray.length }}
							</span>
							<svg-icon class="icon"
							          name="icon-favorites" />
						</nuxt-link>
					</li>
					<li class="page-header__buttons-item">
						<a class="page-header__buttons-link"
						   href="">
							<svg-icon class="icon"
							          name="icon-call" />
						</a>
					</li>
				</ul>
			</div>
			<nav class="page-header__nav grid__col-12">
				<div class="page-header__nav-wrap makes">
					<ul class="makes__list makes__list--header">
						<li class="makes__item"
						    v-for="index in 8"
						    :key="index">
							<nuxt-link :to="'/used/' + allMarks[index].slug"
							           @click.native="navMarkClick()"
							           class="makes__link">
								<div class="makes__title">{{ allMarks[index].title }}</div>
								<div class="makes__count">{{ allMarks[index].offers_count }}</div>
							</nuxt-link>
						</li>
					</ul>
				</div>
				<button class="page-header__makes-more"
				        :class="{'page-header__makes-more--active':modalMarks}"
				        @click.prevent="allMarksClick()">
					Все марки
					<svg-icon class="page-header__makes-more-arrow icon"
					          name="icon-arrow" />
				</button>
			</nav>
		</div>
		<!--TODO анимация выпадающих списков в хедере-->
		<transition name="slide-fade">
			<modal-makes v-show="modalMarks" />
		</transition>
		<transition name="slide-fade">
			<modal-menu v-show="modalMenu" />
		</transition>
	</header>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
	watch: {
		'$route'() {
			this.setModalMenu(false)
		}
	},
	computed: {
		...mapGetters({
			modalMenu: 'modal/modal-menu/modalMenu',
			modalMarks: 'modal/modal-marks/modalMarks',
			allMarks: 'marks/marks/allMarks',
			likesArray: 'favorite/favorite/likesArray'
		})
	},
	mounted() {
		this.getLikes()
	},
	methods: {
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu',
			setModalMarks: 'modal/modal-marks/setModalMarks',
		}),
		burgerClick() {
			this.setModalMenu(!this.modalMenu)
			this.setModalMarks(false)
		},
		navMarkClick() {
			this.setModalMenu(false)
			this.setModalMarks(false)
		},
		allMarksClick() {
			this.setModalMarks(!this.modalMarks)
			this.setModalMenu(false)
		},
		...mapActions({
			getLikes: 'favorite/favorite/getLikes',
		})
	}
}
</script>
<style lang="scss"
       scoped>
.slide-fade-enter-active {
	transition: all .24s ease;
}

.slide-fade-leave-active {
	transition: all .24s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active до версии 2.1.8 */
{
	transform: translateY(-20px);
	opacity: 0;
}
</style>