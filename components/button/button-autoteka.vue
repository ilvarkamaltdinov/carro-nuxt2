<template>
	<button @click.prevent="$emit('click')" class="button button--action button--autoteka button--text"
	        type="button">
		<svg-icon class="button__icon icon"
		          name="icon-autoteka"/>
			<span class="button__text">Автотека</span>
	</button>
</template>