<template>
	<button class="button button--credit button--fixed" @click="$emit('click')">
		Показать <slot></slot> автомобилей
	</button>
</template>