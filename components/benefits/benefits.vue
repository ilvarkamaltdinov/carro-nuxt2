<template>
	<div class="benefits grid__col-12"
	:class="{'benefits--modal': modal}">
		<ul class="benefits__list benefits__list--car">
			<li class="benefits__item"
			    v-for="(benefit, index) in benefits"
			    :key="index">
				<a class="benefits__link popup--link"
				   href="">
					<svg-icon class="benefits__icon"
					          :name="`icon-${benefit.icon}`" />
					<div class="benefits__text">
						{{ benefit.text }}
						<div class="benefits__text-strong">
							{{ benefit.text_strong }}
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		benefits: Array,
		modal: {
			type: Boolean,
			default: false
		}
	}
}
</script>