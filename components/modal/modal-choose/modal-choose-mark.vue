<template>
	<div class="modal__wrap" v-if="$device.isMobile">
		<makes :for-chose-modal="true"/>
	</div>
	<div class="modal__wrap modal__wrap--modal" v-else>
		<makes-letters />
		<makes-modal-desktop/>
	</div>
</template>