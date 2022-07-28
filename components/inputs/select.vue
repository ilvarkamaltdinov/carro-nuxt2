<template>
	<select v-if="$device.isMobile"
	        class="form__field form__field--select"
	        @change="changeSelect()"
	        :value="value">
		<option :value="value">{{ value }}</option>
		<option :value="option"
		        :key="option"
		        v-for="option in options">
			{{ option }}
		</option>
	</select>
	<div v-else
	     @focusout="isOpen = false"
	     tabindex="1"
	     class="form__field form__field--select select"
	     @click="isOpen = !isOpen">
		<span>{{ value }}</span>
		<ul class="select__list"
		    v-if="isOpen">
			<li class="select__item"
			    @click="$emit('input', option)"
			    v-for="option in options"
			    :key="option">
				{{ option }}
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
		value: [String, Number],
		options: Array
	},
	methods: {
		changeSelect() {
			this.$emit('input', event.target.value)
		}
	}
}
</script>