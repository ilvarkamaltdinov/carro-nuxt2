<template>
	<div class="catalog__buttons">
		<div class="catalog__actions">
			<button-favorite @click="$emit('favoriteClick')" />
			<button-call @click="$emit('callClick')" />
		</div>
		<button-credit v-if="!chooseButton" @click="$emit('creditClick')" />
		<button-choose v-else @click="$emit('chooseClick')" />
	</div>
</template>

<script>
export default {
	props: {
		chooseButton: {
			type: Boolean,
			default: false
		}
	}
}
</script>