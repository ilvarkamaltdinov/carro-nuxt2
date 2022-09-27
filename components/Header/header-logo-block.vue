<template>
	<div class="page-header__logo-block">
		<header-burger @burger="$emit('burger')" :modal-menu="modalMenu"/>
		<header-logo/>
		<header-search />
	</div>
</template>
<script>
const HeaderBurger = () => import('@/components/Header/header-burger')
const HeaderLogo = () => import('@/components/Header/header-logo')
const HeaderSearch = () => import('@/components/Header/header-search')
export default {
	components:{HeaderBurger, HeaderLogo, HeaderSearch},
	props: {
		modalMenu: Boolean
	}
}
</script>