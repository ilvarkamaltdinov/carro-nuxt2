<template>
	<div>
		<yandex-map
				:coords="settings.coordinates.split(',')"
				zoom="15"
				style="width: 100%; height: 480px;"
				:controls="['trafficControl']"
		>
			<ymap-marker
					marker-id="1"
					marker-type="placemark"
					:coords="settings.coordinates.split(',')"
			></ymap-marker>
		</yandex-map>
	</div>
</template>

<script>
export default {
	props: {
		settings: Object
	}
}
</script>