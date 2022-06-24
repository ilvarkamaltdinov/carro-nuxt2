<template>
	<input ref="input"
	       class="form__field"
	       :placeholder="placeholder"
	       :value="value"
	       @input="$emit('input', $event.target.value)"
	       :type="type" />
</template>

<script>
import filters from "~/mixins/filters";

export default {
	mixins: [filters],
	props: {
		value: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String,
			default: 'placeholder'
		},
		mask: {
			type: String,
			default: 'placeholder'
		}
	},
	mounted() {
		if (this.mask === 'phone') {
			let im = new Inputmask({
				mask: "+7 (#99) 999-99-99",
				oncomplete:()=> this.$emit('phoneMaskComplete'),
				onincomplete:()=> this.$emit('onincomplete'),
				definitions: {
					"#": {
						validator: "[1234569]",
					},
				},
			});
			im.mask(this.$refs.input);
		}
		if (this.mask === 'date') {
			let im = new Inputmask({
				mask: "99/99/9999"
			});
			im.mask(this.$refs.input);
		}
	}
}
</script>