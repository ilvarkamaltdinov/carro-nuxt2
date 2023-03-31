<template>
	<div class="youtube--blog-wrapper">
		<div class="youtube youtube--blog"
		     id="pf0hQmzZ6sE"
		     style="width:100%; height:100%;">
			<iframe id="yt-iframe"
			        :src="`https://www.youtube.com/embed/${id}`"
			        title="YouTube video player"
			        frameborder="0"
			        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			        allowfullscreen></iframe>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: String
	}
}
</script>