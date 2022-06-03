<template>
	
	<section class="page-main__featured featured featured--banks grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">Банки-партнеры</h1>
				<span class="heading-group__label">Подайте заявку на автокредит в любой банк</span>
			</div>
		</div>
		<ul class="featured__list grid__col-12 grid grid--featured featured__banks">
			<li class="featured__item featured__item--sedan featured__item--tinkoff">
				<nuxt-link to="/credit/tinkoff-bank" class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">Тинькофф</h3>
						<div class="featured__text">от 4.5 %</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="7"/>
					</div>
				</nuxt-link>
			</li>
			<li class="featured__item featured__item--family featured__item--sovcom">
				<a class="featured__link"
				   href="">
					<div class="featured__about">
						<h3 class="featured__title">Совкомбанк</h3>
						<div class="featured__text">от 4.5 %</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="8"/>
					</div>
				</a>
			</li>
			<li class="featured__item featured__item--women featured__item--vtb">
				<a class="featured__link"
				   href="">
					<div class="featured__about">
						<h3 class="featured__title">ВТБ</h3>
						<div class="featured__text">от 4.5 %</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="9"/>
					</div>
				</a>
			</li>
			<li class="featured__item featured__item--business featured__item--sber">
				<a class="featured__link"
				   href="">
					<div class="featured__about">
						<h3 class="featured__title">Сбербанк</h3>
						<div class="featured__text">от 4.5 %</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="10"/>
					</div>
				</a>
			</li>
			<li class="featured__item featured__item--allroad featured__item--alfa">
				<nuxt-link to="/credit/alfa-bank" class="featured__link">
					<div class="featured__about">
						<h3 class="featured__title">Альфа-Банк</h3>
						<div class="featured__text">от 4.5 %</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="11"/>
					</div>
				</nuxt-link>
			</li>
			<li class="featured__item featured__item--taxi featured__item--reif">
				<a class="featured__link"
				   href="">
					<div class="featured__about">
						<h3 class="featured__title">Райффайзен</h3>
						<div class="featured__text">от 4.5%</div>
					</div>
					<div class="featured__picture">
						<div class="glass featured__glass featured__glass--small"></div>
						<div class="glass featured__glass featured__glass--big"></div>
						<featured-img img="12"/>
					</div>
				</a>
			</li>
		</ul>
		<section class="banks grid__col-12">
			<h2 class="heading heading--h2">Рейтинг банков</h2>
			<ul class="banks__list grid">
				<li class="banks__item">
					<div class="banks__main">
						<img class="banks__img"
						     src="~/static/img/banks/logo-tinkoff.svg"
						     alt="" />
						<rating-bank/>
					</div>
					<ul class="banks__info">
						<li class="banks__info-item">Заявок в месяц
							<span class="banks__info-number">367</span>
						</li>
						<li class="banks__info-item">Одобрено автокредитов
							<span class="banks__info-number">184</span>
						</li>
						<li class="banks__info-item">Процентная ставка
							<span class="banks__info-number banks__info-number--stake">13%</span>
						</li>
					</ul>
					<button-bank/>
				</li>
				<li class="banks__item">
					<div class="banks__main">
						<img class="banks__img"
						     src="~/static/img/banks/logo-sber.svg"
						     alt="" />
						<rating-bank/>
					</div>
					<ul class="banks__info">
						<li class="banks__info-item">Заявок в месяц
							<span class="banks__info-number">367</span>
						</li>
						<li class="banks__info-item">Одобрено автокредитов
							<span class="banks__info-number">184</span>
						</li>
						<li class="banks__info-item">Процентная ставка
							<span class="banks__info-number banks__info-number--stake">13%</span>
						</li>
					</ul>
					<button-bank/>
				</li>
				<li class="banks__item">
					<div class="banks__main">
						<img class="banks__img"
						     src="~/static/img/banks/logo-alfa.svg"
						     alt="" />
						<rating-bank/>
					</div>
					<ul class="banks__info">
						<li class="banks__info-item">Заявок в месяц
							<span class="banks__info-number">367</span>
						</li>
						<li class="banks__info-item">Одобрено автокредитов
							<span class="banks__info-number">184</span>
						</li>
						<li class="banks__info-item">Процентная ставка
							<span class="banks__info-number banks__info-number--stake">13%</span>
						</li>
					</ul>
					<button-bank/>
				</li>
				<li class="banks__item">
					<div class="banks__main">
						<img class="banks__img"
						     src="~/static/img/banks/logo-vtb.svg"
						     alt="" />
						<rating-bank/>
					</div>
					<ul class="banks__info">
						<li class="banks__info-item">Заявок в месяц
							<span class="banks__info-number">367</span>
						</li>
						<li class="banks__info-item">Одобрено автокредитов
							<span class="banks__info-number">184</span>
						</li>
						<li class="banks__info-item">Процентная ставка
							<span class="banks__info-number banks__info-number--stake">13%</span>
						</li>
					</ul>
					<button-bank/>
				</li>
				<li class="banks__item">
					<div class="banks__main">
						<img class="banks__img"
						     src="~/static/img/banks/logo-sovcom.svg"
						     alt="" />
						<rating-bank/>
					</div>
					<ul class="banks__info">
						<li class="banks__info-item">Заявок в месяц
							<span class="banks__info-number">367</span>
						</li>
						<li class="banks__info-item">Одобрено автокредитов
							<span class="banks__info-number">184</span>
						</li>
						<li class="banks__info-item">Процентная ставка
							<span class="banks__info-number banks__info-number--stake">13%</span>
						</li>
					</ul>
					<button-bank/>
				</li>
				<li class="banks__item">
					<div class="banks__main">
						<img class="banks__img"
						     src="~/static/img/banks/logo-reif.svg"
						     alt="" />
						<rating-bank/>
					</div>
					<ul class="banks__info">
						<li class="banks__info-item">Заявок в месяц
							<span class="banks__info-number">367</span>
						</li>
						<li class="banks__info-item">Одобрено автокредитов
							<span class="banks__info-number">184</span>
						</li>
						<li class="banks__info-item">Процентная ставка
							<span class="banks__info-number banks__info-number--stake">13%</span>
						</li>
					</ul>
					<button-bank/>
				</li>
			</ul>
		</section>
	</section>
</template>