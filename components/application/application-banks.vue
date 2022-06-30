<template>
	<div class="application__banks">
		<div class="application__banks-form">
			<img class="application__banks-img application__banks-img--alfa"
			     :src="require(`~/assets/img/banks/${bankSlug}.svg`)"
			     alt="bank" />
			<nuxt-link to="/banks-partners"
			           class="application__banks-text">и еще 5 банков
			</nuxt-link>
		</div>
		<div class="application__form-img-wrap">
			<nuxt-picture quality="100"
			              :imgAttrs="{class:'application__form-img'}"
			              :src="`img/banks/alpha-bank@2x.png`" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		bankSlug: {
			type: String,
			default: 'alfa-bank'
		}
	}
}
</script>