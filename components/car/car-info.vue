<template>
	<div class="car__info grid__col-6">
		<div class="car__info-tabs">
			<tabs-list-tech />
		</div>
		<div class="swiper swiper--car-info">
			<div class="car__info-groups swiper-wrapper">
				<div class="swiper-slide car__info-group car__info-group--tech">
					<h2 class="visually-hidden">Характеристики автомобиля</h2>
					<ul class="car__tech-list">
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-year" />
							</div>
							<div class="car__tech-content">
								2020
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-gear" />
							</div>
							<div class="car__tech-content">
								АКПП
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-mileage" />
							</div>
							<div class="car__tech-content">
								107 520 км
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-volume" />
							</div>
							<div class="car__tech-content">
								2.5 л
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-engine" />
							</div>
							<div class="car__tech-content">
								222 л.с.
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-fuel" />
							</div>
							<div class="car__tech-content">
								Бензин
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-form" />
							</div>
							<div class="car__tech-content">
								Седан
							</div>
						</li>
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-wd" />
							</div>
							<div class="car__tech-content">
								Задний
							</div>
						</li>
						<!--TODO Цвет в карточке авто-->
						<!--<li class="car__tech-item">-->
						<!--	<div class="car__tech-icon-wrap">-->
						<!--		<svg-icon class="car__tech-icon"-->
						<!--		          name="icon-color" />-->
						<!--	</div>-->
						<!--	<div class="car__tech-content">-->
						<!--		Белый-->
						<!--	</div>-->
						<!--</li>-->
						<li class="car__tech-item">
							<div class="car__tech-icon-wrap">
								<svg-icon class="car__tech-icon"
								          name="icon-owners" />
							</div>
							<div class="car__tech-content">
								Более 3-x
							</div>
						</li>
					</ul>
				</div>
				<div class="swiper-slide car__info-group car__info-group--options">
					<div class="heading-group">
						<div class="heading-group__wrap">
							<h2 class="heading heading--h2">
								Комплектация
							</h2>
							<span class="heading-group__label">
								Active Plus
							</span>
						</div>
					</div>
					<div class="car__info-options features">
						<div class="features__group">
							<h3 class="heading heading--h3"> Безопасность</h3>
							<ul class="features__list">
								<li class="features__item">Антипробуксовочная система</li>
								<li class="features__item">Бортовой компьютер</li>
								<li class="features__item">Датчик света</li>
								<li class="features__item">Иммобилайзер</li>
								<li class="features__item">Камера заднего вида</li>
							</ul>
						</div>
					</div>
					<button-show>
						Показать больше
					</button-show>
				</div>
				<div class="swiper-slide car__info-group car__info-group--options">
					<div class="heading-group">
						<div class="heading-group__wrap">
							<h2 class="heading heading--h2">
								Информация о дилере
							</h2>
							<span class="heading-group__label">
								Автоцентр «АвтоГрадъ»
							</span>
						</div>
						<rating-dealer />
					</div>
					<div class="car__info-options features">
						<div class="features__group">
							<h3 class="heading heading--h3">Адрес:</h3>
							<ul class="features__list">
								<li class="features__item">г. Москва, Варшавское шоссе, д. 170Е</li>
								<li class="features__item">м. Аннино</li>
							</ul>
						</div>
						<div class="features__group">
							<h3 class="heading heading--h3">Телефон:</h3>
							<ul class="features__list">
								<li class="features__item">
									<a href="tel:+78007002211">+7 (800) 700-22-11</a>
								</li>
							</ul>
						</div>
						<div class="features__group">
							<h3 class="heading heading--h3">Режим работы:</h3>
							<ul class="features__list">
								<li class="features__item">c 9:00 до 21:00 без выходных</li>
							</ul>
						</div>
						<button-show>
							Подробнее о дилере
						</button-show>
					</div>
				</div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>