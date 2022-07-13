<template>
	<select v-if="$device.isMobile"
	        class="form__field form__field--select"
	        @input="$emit('input')"
	        :value="value">
		<option value="Год">Год</option>
		<option :value="year"
		        :key="year"
		        v-for="year in _.range(2003, new Date().getFullYear()+1)">
			{{ year }}
		</option>
	</select>
	<div v-else class="form__field form__field--select select">
		<span>test</span>
		<ul class="select__list">
			<li class="select__item">
				Сначала дешевле
			</li>
			<li class="select__item">
				Сначала дешевле
			</li>
			<li class="select__item">
				Сначала дешевле
			</li>
			<li class="select__item">
				Сначала дешевле
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		value: String
	}
}
</script>>