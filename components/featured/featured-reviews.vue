<template>
	
	<section class="page-main__featured featured featured--reviews grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ pageTitle }}</h1>
				<span class="heading-group__label">Покупатели о наши партнерах</span>
			</div>
		</div>
		<div class="grid__col-12">
			<tabs-dealers />
			<ul class="featured__list grid grid--featured featured__banks">
				<li class="featured__item featured__item--review"
				    v-for="item in reviewsList"
				    :key="item.id">
					<div class="featured__link">
						<div class="featured__about">
							<h3 class="featured__title">{{ item.title }}</h3>
							<div class="featured__text">{{ item.date }}</div>
						</div>
						<div class="featured__review-picture">
							<img class="featured__review-img"
							     :src="require('~/assets/img/reviews/reviews-'+ item.img +'.jpg')"
							     alt="" />
						</div>
					</div>
					<svg-icon class="featured__play-icon"
					          name="icon-play"></svg-icon>
				</li>
			</ul>
			<button-typical @click="total += 9"
			                text="Показать больше"
			                class="button--link button--more" />
		</div>
	</section>
</template>
<script>
export default {
	props: {
		pageTitle: String
	},
	data() {
		return {
			total: 9,
			reviews: [
				// {
				// 	id: 0,
				// 	title: 'Отзыв об автоцентре АвтоГрадъ',
				// 	date: '4 марта, 2022',
				// 	img: '1'
				// },
				// {
				// 	id: 1,
				// 	title: 'Отзыв об автоцентре АвтоГрадъ',
				// 	date: '4 марта, 2022',
				// 	img: '1'
				// },
				// {
				// 	id: 2,
				// 	title: 'Отзыв об автоцентре АвтоГрадъ',
				// 	date: '4 марта, 2022',
				// 	img: '1'
				// },
				// {
				// 	id: 3,
				// 	title: 'Отзыв об автоцентре АвтоГрадъ',
				// 	date: '4 марта, 2022',
				// 	img: '1'
				// },
				// {
				// 	id: 4,
				// 	title: 'Отзыв об автоцентре АвтоГрадъ',
				// 	date: '4 марта, 2022',
				// 	img: '1'
				// },
				// {
				// 	id: 5,
				// 	title: 'Отзыв об автоцентре АвтоГрадъ',
				// 	date: '4 марта, 2022',
				// 	img: '1'
				// },
				// {
				// 	id: 6,
				// 	title: 'Отзыв об автоцентре АвтоГрадъ',
				// 	date: '4 марта, 2022',
				// 	img: '1'
				// },
				// {
				// 	id: 7,
				// 	title: 'Отзыв об автоцентре АвтоГрадъ',
				// 	date: '4 марта, 2022',
				// 	img: '1'
				// },
				// {
				// 	id: 8,
				// 	title: 'Отзыв об автоцентре АвтоГрадъ',
				// 	date: '4 марта, 2022',
				// 	img: '1'
				// },
				// {
				// 	id: 9,
				// 	title: 'Отзыв об автоцентре АвтоГрадъ',
				// 	date: '4 марта, 2022',
				// 	img: '1'
				// },
				{
					id: 10,
					title: 'Отзыв об автоцентре АвтоГрадъ',
					date: '4 марта, 2022',
					img: '1'
				},
				{
					id: 11,
					title: 'Отзыв об автоцентре АвтоГрадъ',
					date: '4 марта, 2022',
					img: '1'
				},
				{
					id: 12,
					title: 'Отзыв об автоцентре АвтоГрадъ',
					date: '4 марта, 2022',
					img: '1'
				}
			]
		}
	},
	computed: {
		reviewsList() {
			return this.reviews.slice(0, this.total);
		}
	}
}
</script>