<template>
	<select v-if="$device.isMobile"
	        class="form__field form__field--select"
	        @change="changeSelect()"
	        v-model="currentValue"
	        :value="currentValue">
		<option :value="currentValue">
			{{ value.title || value }}
		</option>
		<option :value="option.slug || option"
		        :key="option.name || option.title || option"
		        v-for="option in options">
			{{ option.name || option.title || option }}
		</option>
	</select>
	<div v-else
	     @focusout="isOpen = false"
	     tabindex="1"
	     class="form__field form__field--select select"
	     @click="isOpen = !isOpen">
		<span>{{ value.title || value }}</span>
		<ul class="select__list"
		    v-if="isOpen">
			<li class="select__item"
			    @click="$emit('input', option)"
			    v-for="option in options"
			    :key="option.title || option">
				{{ option.title || option }}
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
		value: [String, Number, Object],
		options: Array
	},
	computed: {
		currentValue: {
			get() {
				return this.value.title || this.value
			},
			set() {
				return this.value.title || this.value
			}
		}
	},
	methods: {
		changeSelect() {
			this.$emit('input', event.target.value)
		}
	}
}
</script>