<template>
	<div class="form__total-wrap">
		<div class="form__total-text">Ваш платеж:</div>
		<div class="form__total-number">16 500 ₽ / мес.
			<tippy-question />
		</div>
	</div>
</template>
<script>
const tippyQuestion = () => import('@/components/tippy/tippy-question')
export default {
	components: {tippyQuestion}
}
</script>