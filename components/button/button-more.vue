<template>
	<a @click.prevent="$emit('click')" class="button button--link button--more" href="">
		<slot></slot>
	</a>
</template>