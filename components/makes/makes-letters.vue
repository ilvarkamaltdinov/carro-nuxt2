<template>
	<div class="makes__letters">
		<ul class="makes__letters-list">
			<makes-letters-item v-scroll-to="{
				el: '#' + item,
        container: '.modal',
        offset: -24,
			}"
			                    v-for="(item, index) in alphabetMarks"
			                    :key="index">
				{{ item }}
			</makes-letters-item>
		</ul>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			alphabetMarks: 'marks/marks/alphabetMarks'
		})
	}
}
</script>