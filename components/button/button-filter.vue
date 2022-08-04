<template>
	<button @click.prevent="$emit('click')" class="button button--action button--filter filter__button"
	        type="button">
		<svg-icon class="button__icon"
		          name="icon-filter"/>
    <span class="button__text">Фильтр</span>
	</button>
</template>
