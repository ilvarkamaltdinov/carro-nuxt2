<template>
	<ul class="main-nav__list site-list">
		<li class="site-list__item site-list__item--group">
			<div class="site-list__link site-list__link--group">Автомобили</div>
			<ul class="site-list__group-list">
				<li class="site-list__item site-list__item--sub">
					<a class="site-list__link"
					   href="">Легковые
					</a>
				</li>
				<li class="site-list__item site-list__item--sub">
					<a class="site-list__link"
					   href="">Коммерческие
					</a>
				</li>
			</ul>
		</li>
		<li class="site-list__item site-list__item--group">
			<div class="site-list__link site-list__link--group">Услуги</div>
			<ul class="site-list__group-list">
				<li class="site-list__item site-list__item--sub">
					<nuxt-link to="/credit"
					           class="site-list__link"
					           @click.native="setModalMenu(false)"
					           href="">Автокредит
					</nuxt-link>
				</li>
				<li class="site-list__item site-list__item--sub">
					<nuxt-link to="/tradeIn"
					           class="site-list__link"
					           @click.native="setModalMenu(false)"
					           href="">Trade-In
					</nuxt-link>
				</li>
				<li class="site-list__item site-list__item--sub">
					<a class="site-list__link"
					   href="">Рассрочка
					</a>
				</li>
				<li class="site-list__item site-list__item--sub">
					<a class="site-list__link"
					   href="">Бесплатный подбор
					</a>
				</li>
				<li class="site-list__item site-list__item--sub">
					<a class="site-list__link"
					   href="">Выкуп
					</a>
				</li>
				<li class="site-list__item site-list__item--sub">
					<a class="site-list__link"
					   href="">Такси+
					</a>
				</li>
				<li class="site-list__item site-list__item--sub">
					<a class="site-list__link"
					   href="">Детейлинг
					</a>
				</li>
			</ul>
		</li>
		<li class="site-list__item site-list__item--group">
			<div class="site-list__link site-list__link--group">Информация</div>
			<ul class="site-list__group-list">
				<!--<li class="site-list__item site-list__item&#45;&#45;sub">-->
				<!--	<a class="site-list__link"-->
				<!--	   href="">Информация-->
				<!--	</a>-->
				<!--</li>-->
				<!--<li class="site-list__item site-list__item&#45;&#45;sub">-->
				<!--	<a class="site-list__link"-->
				<!--	   href="">Помощь-->
				<!--	</a>-->
				<!--</li>-->
				<li class="site-list__item site-list__item--sub">
					<nuxt-link to="/blog"
					           class="site-list__link"
					           @click.native="setModalMenu(false)"
					           href="">Блог
					</nuxt-link>
				</li>
				<!--<li class="site-list__item site-list__item&#45;&#45;sub">-->
				<!--	<a class="site-list__link"-->
				<!--	   href="">Отзывы об авто-->
				<!--	</a>-->
				<!--</li>-->
				<li class="site-list__item site-list__item--sub">
					<a class="site-list__link"
					   href="">Отзывы
					</a>
				</li>
				<li class="site-list__item site-list__item--sub">
					<nuxt-link to="/about"
					           class="site-list__link"
					           @click.native="setModalMenu(false)"
					           href="">О портале
					</nuxt-link>
				</li>
			</ul>
		</li>
		<li class="site-list__item site-list__item--group">
			<div class="site-list__link site-list__link--group">Автосалоны</div>
			<ul class="site-list__group-list">
				<li class="site-list__item site-list__item--sub">
					<nuxt-link to="/contacts"
					           class="site-list__link"
					           @click.native="setModalMenu(false)"
					           href="">Контакты
					</nuxt-link>
				</li>
				<li class="site-list__item site-list__item--sub">
					<a class="site-list__link"
					   href="">Предложения
					</a>
				</li>
			</ul>
		</li>
		<li class="site-list__item site-list__item--group">
			<div class="site-list__link site-list__link--group">Банки</div>
			<ul class="site-list__group-list">
				<li class="site-list__item site-list__item--sub">
					<nuxt-link to="/banks"
					           class="site-list__link"
					           @click.native="setModalMenu(false)"
					           href="">Банки-партнеры
					</nuxt-link>
				</li>
				<!--<li class="site-list__item site-list__item&#45;&#45;sub">-->
				<!--	<a class="site-list__link"-->
				<!--	   href="">Рейтинг банков-->
				<!--	</a>-->
				<!--</li>-->
			</ul>
		</li>
	</ul>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
	methods: {
		...mapMutations({
			setModalMenu: 'modal/modal-menu/setModalMenu'
		})
	}
}
</script>