<template>
	<ul class="page-footer__makes-logos">
		<li class="page-footer__makes-item" v-for="make in footerMakes" :key="make.slug">
			<nuxt-link :to="`/used/${make.slug}`" :title="make.title" class="page-footer__makes-link">
				<svg-icon class="page-footer__makes-icon" :title="make.title"
				          :name="`icon-${make.slug}`" />
			</nuxt-link>
		</li>
	</ul>
</template>
<script>
  export default {
    created() {
      this.footerMakes = [
        {
          slug: 'bmw',
          title: 'BMW'
        },
        {
          slug: 'mercedes-benz',
          title: 'Mercedes-Benz'
        },
        {
          slug: 'volkswagen',
          title: 'Volkswagen'
        },
        {
          slug: 'skoda',
          title: 'Skoda'
        },
        {
          slug: 'nissan',
          title: 'Nissan'
        },
        {
          slug: 'mazda',
          title: 'Mazda'
        },
        {
          slug: 'kia',
          title: 'KIA'
        },
        {
          slug: 'hyundai',
          title: 'Hyundai'
        },
        {
          slug: 'ford',
          title: 'Ford'
        },
        {
          slug: 'toyota',
          title: 'Toyota'
        },
        {
          slug: 'cadillac',
          title: 'Cadillac'
        }
      ]
    }
  }
</script>
