<template>
	<main class="page-main">
		<div class="grid grid--container">
			<h1 class="visually-hidden">Автомобили с пробегом в Москве</h1>
			<div class="page-main__promo grid__col-8">
				<slider-index />
				<component :is="storiesComponent" />
			</div>
			<form-index />
			<component :is="catalogComponent"/>
			<featured />
			<video-about />
		</div>
	</main>

</template>
<script>
export default {
	data() {
		return {
			storiesComponent: 'stories',
			catalogComponent: 'catalog-index'
		}
	},
	methods: {
		setMobile() {
			this.storiesComponent = 'stories'
			this.catalogComponent = 'catalog-index'
		},
		setDesktop() {
			this.storiesComponent = 'stories-desktop'
			this.catalogComponent = 'catalog-index-desktop'
		}
	},
	mounted() {
		window.innerWidth < 1200 ?
				this.setMobile()
				: this.setDesktop()
		
	}
}
</script>