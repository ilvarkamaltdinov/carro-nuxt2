<template>
	<select v-if="$device.isMobile"
	        class="form__field form__field--select"
	        @change="changeSelect(event)"
	        :value="value">
		<option value="Год">Год</option>
		<option :value="year"
		        :key="year"
		        v-for="year in _.range(2003, new Date().getFullYear()+1)">
			{{ year }}
		</option>
	</select>
	<div v-else
	     class="form__field form__field--select select" @click="isOpen = !isOpen">
		<span>{{ value }}</span>
		<ul class="select__list" v-if="isOpen">
			<li class="select__item"
			    @click.prevent="$emit('input', year)"
			    v-for="year in yearRange"
			    :key="year">
				{{ year }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false,
		}
	},
	props: {
		value: [String, Number]
	},
	computed:{
		yearRange(){
			return _.range(2003, new Date().getFullYear()+1)
		}
	},
	methods:{
		changeSelect(){
			this.$emit('input', event.target.value)
		}
	}
}
</script>
<style>
.form__field--select {
	overflow: visible !important;
}

.select__list {
	z-index: 1;
}
</style>