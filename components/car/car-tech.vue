<template>
	<div class="car__info-group">
		<h2 class="visually-hidden">Характеристики автомобиля</h2>
		<ul class="car__tech-list">
			<li class="car__tech-item">
				<div class="car__tech-icon-wrap">
					<svg-icon class="car__tech-icon"
					          name="icon-year" />
				</div>
				<div class="car__tech-content">
					{{ offer.year }}
				</div>
			</li>
			<li class="car__tech-item">
				<div class="car__tech-icon-wrap">
					<svg-icon class="car__tech-icon"
					          name="icon-gear" />
				</div>
				<div class="car__tech-content">
					{{ offer.gearbox.title_short }}
				</div>
			</li>
			<li class="car__tech-item">
				<div class="car__tech-icon-wrap">
					<svg-icon class="car__tech-icon"
					          name="icon-mileage" />
				</div>
				<div class="car__tech-content">
					{{ offer.run | run }} км
				</div>
			</li>
			<li class="car__tech-item">
				<div class="car__tech-icon-wrap">
					<svg-icon class="car__tech-icon"
					          name="icon-volume" />
				</div>
				<div class="car__tech-content">
					{{ offer.engine_volume | engineVolume }} л
				</div>
			</li>
			<li class="car__tech-item">
				<div class="car__tech-icon-wrap">
					<svg-icon class="car__tech-icon"
					          name="icon-engine" />
				</div>
				<div class="car__tech-content">
					{{ offer.engine_power }} л.с.
				</div>
			</li>
			<li class="car__tech-item">
				<div class="car__tech-icon-wrap">
					<svg-icon class="car__tech-icon"
					          name="icon-fuel" />
				</div>
				<div class="car__tech-content">
					{{ offer.engineType.title }}
				</div>
			</li>
			<li class="car__tech-item">
				<div class="car__tech-icon-wrap">
					<svg-icon class="car__tech-icon"
					          name="icon-form" />
				</div>
				<div class="car__tech-content">
					{{ offer.bodyType.title }}
				</div>
			</li>
			<li class="car__tech-item">
				<div class="car__tech-icon-wrap">
					<svg-icon class="car__tech-icon"
					          name="icon-wd" />
				</div>
				<div class="car__tech-content">
					{{ offer.driveType.title }}
				</div>
			</li>
			<li class="car__tech-item car__tech-item--mobile">
				<div class="car__tech-icon-wrap">
					<svg-icon class="car__tech-icon"
					          name="icon-color" />
				</div>
				<div class="car__tech-content">
					{{ offer.color.title }}
				</div>
			</li>
			<li class="car__tech-item">
				<div class="car__tech-icon-wrap">
					<svg-icon class="car__tech-icon"
					          name="icon-owners" />
				</div>
				<div class="car__tech-content">
					{{ offer.owner.title === '0 владельцев' ? 'Новый' : offer.owner.title }}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import filters from "@/mixins/filters";

export default {
	mixins: [filters],
	props: {
		offer: Object
	}
}
</script>
