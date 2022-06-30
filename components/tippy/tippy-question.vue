<template>
	<tippy :content="'Hello'" arrow>
		<template v-slot:trigger>
			<div class="tippy tippy--question">
				<svg-icon name="icon-question"
				          class="tippy__icon" />
			</div>
		</template>
	</tippy>
</template>