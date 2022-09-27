<template>
	<div class="page-header__logo-block">
		<header-burger @burger="$emit('burger')" :modal-menu="modalMenu"/>
		<header-logo/>
		<header-search />
	</div>
</template>
<script>
export default {
	props: {
		modalMenu: Boolean
	}
}
</script>