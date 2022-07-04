<template>
	<li role="presentation"
	    class="tabs__item"
	    :class="{'tabs__item--active':isActive}">
		<slot></slot>
	</li>
</template>
<script>
export default {
	props: {
		isActive: Boolean,
		link: Boolean
	}
}
</script>