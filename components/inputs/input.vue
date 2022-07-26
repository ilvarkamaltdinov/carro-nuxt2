<template>
	<input ref="input"
	       class="form__field"
	       :placeholder="placeholder"
	       :value="value"
	       autocomplete="off"
	       :inputmode="type==='tel' ? 'numeric' : ''"
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
		if (this.mask === 'money') {
			let im = new Inputmask({
				alias: "decimal",
				digits: 2,
				placeholder: "",
				autoGroup: true,
				allowMinus: false,
				rightAlign: false,
				groupSeparator: " ", // <-- this is &puncsp;
				radixPoint: " ",
			});
			im.mask(this.$refs.input);
		}
		if (this.mask === 'number') {
			let im = new Inputmask({
				regex: "[0-9]*",
				placeholder: this.placeholder,
				showMaskOnHover: false
			});
			im.mask(this.$refs.input);
		}
		if (this.mask === 'phone') {
			let im = new Inputmask({
				mask: "+7 (#99) 999-99-99",
				oncomplete: () => this.$emit('phoneMaskComplete'),
				onincomplete: () => this.$emit('onincomplete'),
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
				mask: "99/99/9999",
				oncomplete: () => this.$emit('dateMaskComplete'),
				onincomplete: () => this.$emit('onincomplete'),
			});
			im.mask(this.$refs.input);
		}
	}
}
</script>