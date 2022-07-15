<template>
	<tippy arrow>
		<div class="tippy__text">
			{{ text }}
		</div>
		<template v-slot:trigger>
			<div class="tippy tippy--question">
				<svg-icon name="icon-question"
				          class="tippy__icon" />
			</div>
		</template>
	</tippy>
</template>
<script>
export default {
	props: {
		text: String
	}
}
</script>