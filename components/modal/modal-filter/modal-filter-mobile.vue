<template>
	<div class="modal__wrap">
		<div class="filter filter--modal">
			<filter-list/>
		</div>
		<div class="page-main__button-fixed">
			<button-typical v-if="$device.isMobileOrTablet" @click="filter" text="Показать автомобили" button-class="button--credit  button--fixed" />
		</div>
	</div>
</template>
<script>
import {mapActions, mapMutations} from "vuex";

export default {
		methods:{
			...mapMutations({
				setChosen: 'filters/filters/SET_CHOSEN',
				unsetChosen: 'filters/filters/UNSET_CHOSEN',
				setIsFilterClick: 'filters/filters/SET_IS_FILTER_CLICK',
			}),
			...mapActions({
				closeModal: 'modal/modal-main/closeModal',
				openModal: 'modal/modal-main/openModal',
				setUrl:'filters/filters/setUrl'
				
			}),
			async filter() {
				// this.setIsFilterClick(true)
				await this.closeModal()
				// await this.setUrl();
			}
		}
	}
</script>