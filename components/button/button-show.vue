<template>
	<button @click.prevent="$emit('click')" class="button button--show">
		<slot></slot>
	</button>
</template>