<template>
	<div>
		<div class="modal__options">
			<img class="modal__logo"
			     src="~/assets/img/dealers/logos/logo-autograd.svg"
			     loading="lazy"
			     alt="" />
			<div class="modal__buttons">
				<button-callback />
				<button-call-modal />
			</div>
		</div>
		<div class="modal__wrap">
			<div class="features">
				<div class="features__group">
					<h3 class="heading heading--h3">Контактные данные:</h3>
					<ul class="features__list">
						<li class="features__item">
							<div class="features__item-type">Город:</div>
							<div class="features__item-content">г. Москва</div>
						</li>
						<li class="features__item">
							<div class="features__item-type">Адрес:</div>
							<div class="features__item-content">Варшавское шоссе, д. 170Е</div>
						</li>
						<li class="features__item">
							<div class="features__item-type">Метро:</div>
							<div class="features__item-content">м. Аннино, выход №1</div>
						</li>
						<li class="features__item">
							<div class="features__item-type">Режим работы:</div>
							<div class="features__item-content">с 9:00 до 20:00</div>
						</li>
						<li class="features__item">
							<div class="features__item-type">Телефон автоцентра:</div>
							<div class="features__item-content">
								<a class="features__link"
								   href="tel:+78007002211">+7 (800) 700-22-11
								</a>
							</div>
						</li>
						<li class="features__item">
							<div class="features__item-type">Кредитный отдел:</div>
							<div class="features__item-content">
								<a class="features__link"
								   href="tel:+78007002211">+7 (800) 700-22-11
								</a>
							</div>
						</li>
					</ul>
				</div>
				<div class="features__group">
					<h3 class="heading heading--h3">Об автоцентре:</h3>
					<p class="features__item">Автосалон «АвтоГрадъ» - один из крупнейших и старейших центров автомобильных продаж
					                          в Москве. За 25 лет продуктивной работы мы завоевали доверие многих тысяч
					                          автолюбителей, которые приезжают к нам за автомобилем со всей страны. Наш автоцентр
					                          сотрудничает с лучшими банками и страховыми компаниями, юристами и
					                          специалистами-оценщиками. Убедитесь в лучшем столичном сервисе и Вы, приехав за
					                          машиной своей мечты к нам, в «АвтоГрадъ».
					</p>
				</div>
			</div>
			<div class="modal__dealer-photos">
				<h3 class="heading heading--h3">Фотографии автоцентра:</h3>
				<!--<dealer-slider></dealer-slider>-->
			</div>
			<div class="modal__dealer-map">
				<h3 class="heading heading--h3">Автоцентр на карте:</h3>
				<div class="map map--dealer"></div>
			</div>
		</div>
	</div>
</template>