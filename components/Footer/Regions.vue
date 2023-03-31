<template>
	<div class="page-footer__city-wrap"
	     tabindex="1"
	     @focusout="open = false">
		<div class="page-footer__city">
			<div @click="open = !open">
				<svg-icon class="page-footer__city-icon"
				          name="icon-map" />
				<span>{{ settings.city }}</span>
			</div>
		</div>
		<transition name="select">
			<div class="select__list select__list--regions"
			     v-show="open">
				<a class="select__item select__item-link"
				   v-for="(item, index) in regions"
				   :key="index"
				   :title="item.name"
				   :href="'https://' + item.link">{{ item.name }}
				</a>
			</div>
		</transition>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			open: false,
			regions: [
				{
					name: 'Москва',
					link: 'carro.ru'
				},
				{
					name: 'Санкт-Петербург',
					link: 'spb.carro.ru'
				},
				{
					name: 'Екатеринбург',
					link: 'ekb.carro.ru'
				},
				{
					name: 'Калуга',
					link: 'kaluga.carro.ru'
				},
				{
					name: 'Кемерово',
					link: 'kem.carro.ru'
				},
				{
					name: 'Красноярск',
					link: 'krsk.carro.ru'
				},
				{
					name: 'Новосибирск',
					link: 'nsk.carro.ru'
				},
				{
					name: 'Оренбург',
					link: 'ornb.carro.ru'
				},
				{
					name: 'Сургут',
					link: 'surgut.carro.ru'
				},
				{
					name: 'Тольятти',
					link: 'tlt.carro.ru'
				},
				{
					name: 'Тюмень',
					link: 'tmn.carro.ru'
				},
				{
					name: 'Иркутск',
					link: 'irk.carro.ru'
				},
			
			
			]
		}
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings/settings'
		})
	}
}
</script>