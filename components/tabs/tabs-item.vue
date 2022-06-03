<template>
	<li role="presentation"
	    class="tabs__item"
	    :class="{'tabs__item--active':isActive}">
		<button @click="$emit('click')" class="tabs__link"
		        role="tab"
		        data-toggle="tab">
			<slot></slot>
		</button>
	</li>
</template>
<script>
export default {
	props: {
		isActive: {
			type: Boolean,
			default: false
		}
	}
}
</script>