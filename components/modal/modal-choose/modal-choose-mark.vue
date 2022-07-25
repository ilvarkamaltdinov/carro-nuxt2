<template>
	<div class="modal__wrap" v-if="$device.isMobile">
		<makes for-chose-modal/>
	</div>
	<div class="modal__wrap" v-else>
		<makes-letters />
		<makes-modal-desktop/>
	</div>
</template>