<template>
	<div class="benefits grid__col-12 benefits--mobile">
		<ul class="benefits__list">
			<li class="benefits__item">
				<div class="benefits__link">
					<img src="~/assets/img/autoteka.svg"
					     alt="Эмблема Автотеки — carro.ru"
					     height="16"
					     width="16"
					     class="benefits__icon icon" />
					<div class="benefits__text">
						Все автомобили
						<div class="benefits__text-strong">
							Проверены в Автотеке
						</div>
					</div>
				</div>
			</li>
			<li class="benefits__item">
				<nuxt-link to="/credit"
				           class="benefits__link">
					<svg-icon class="benefits__icon icon"
					          name="icon-credit-card" />
					<div class="benefits__text">
						Скидка до 300 000 ₽
						<div class="benefits__text-strong">
							при покупке авто в кредит
						</div>
					</div>
				</nuxt-link>
			</li>
			<li class="benefits__item">
				<div class="benefits__link">
					<svg-icon class="benefits__icon icon"
					          name="icon-insurance" />
					<div class="benefits__text">
						ОСАГО в подарок
						<div class="benefits__text-strong">
							за заявку на автокредит
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>