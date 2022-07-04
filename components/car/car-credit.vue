<template>
	<div class="car__credit-wrap application grid__col-12 grid grid--application">
		<div class="application__form grid__col-4">
			<div class="heading-group heading-group--form">
				<div class="heading-group__wrap">
					<h2 class="heading heading--h2">
						Автокредит
						<span class="heading__promo">
							4.9%
						</span>
					</h2>
					<span class="heading-group__label">
						Получите 100% одобрение
					</span>
				</div>
				<rating :max="100" :rating="100" />
			</div>
			<form-credit :has-chose="false"
			             :offer="offer" />
		</div>
		<div class="application__catalog catalog grid__col-8" v-if="!$device.isMobile" >
			<catalog-item-large-desktop :has-buttons="false"
			                            :offer="offer" />
		</div>
		<application-banks class="grid__col-5"/>
		<div class="application__terms grid__col-3">
			<div class="application__terms-item">
				<div class="application__terms-number application__terms-number--stake">
					4.9%
				</div>
				<div class="application__terms-text">
					Ставка по автокредиту
				</div>
			</div>
			<div class="application__terms-item">
				<div class="application__terms-number application__terms-number--payment">
					54 520 ₽
				</div>
				<div class="application__terms-text">
					Ежемеясячный платеж
				</div>
			</div>
		</div>
	
	</div>
</template>
<script>
export default {
	props: {
		offer: Object
	}
}
</script>