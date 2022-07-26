<template>
	<section class="page-main__featured featured featured--reviews grid">
		<div class="heading-group heading-group--h1">
			<div class="heading-group__wrap">
				<h1 class="heading heading--h1">{{ pageTitle }}</h1>
				<span class="heading-group__label">Покупатели о наши партнерах</span>
			</div>
		</div>
		<div class="grid__col-12">
			<div class="tabs">
				<ul class="tabs__list">
					<li role="presentation"
					    :class="{'tabs__item--active':activeTab === 'prime'}"
					    class="tabs__item">
						<button @click="getReviews('prime')"
						        class="tabs__link"
						        role="tab"
						        data-toggle="tab">
							PRIME
						</button>
					</li>
				</ul>
			</div>
			<ul class="featured__list grid grid--featured featured__reviews">
				<li class="featured__item featured__item--review "
				    :class="{'featured__item--review-active':videoShow === video.id}"
				    @click="clickVideo(video.id)"
				    v-for="video in reviews"
				    :key="video.id">
					<iframe v-if="videoShow === video.id"
					        class="featured__review-player"
					        width="610"
					        :src="`https://www.youtube.com/embed/${video.contentDetails.videoId}?autoplay=1`"
					        frameborder="0"
					        allow="encrypted-media"
					        allowfullscreen />
					<div v-if="videoShow !== video.id" class="featured__link">
						<div class="featured__about">
							<h3 class="featured__title">{{ video.snippet.title }}</h3>
						</div>
						<div class="featured__review-picture">
							<img class="featured__review-img"
							     :src="video.snippet.thumbnails.high.url"
							     :alt="video.snippet.title" />
						</div>
					</div>
					<svg-icon  v-if="videoShow !== video.id" class="featured__play-icon"
					          name="icon-play" />
				</li>
			</ul>
			<button-typical v-if="showMore"
			                @click="getMore"
			                text="Показать больше"
			                class="button--link button--more" />
		</div>
	</section>
</template>
<script>
export default {
	props: {
		pageTitle: String
	},
	data() {
		return {
			activeTab:'prime',
			reviews: [],
			videoShow: null,
			nextPageToken: null,
			showMore: true
		}
	},
	async created() {
		await this.getPlaylist(this.nextPageToken);
	},
	methods: {
		getReviews(type){
			console.log(type)
		},
		clickVideo(id) {
			this.videoShow = id
		},
		getMore() {
			this.getPlaylist(this.nextPageToken)
		},
		async getPlaylist(pageToken) {
			let response = await this.$axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
				params: {
					"playlistId": "PLHpvdAouOo_YkCytWO1ltQ_1cbfnv-YGF",
					"orderby": "reversedPosition",
					"maxResults": 9,
					"key": "AIzaSyBw7M2CPzyAtwX1ct9XQk5akiouCUQ9CJU",
					"part": "snippet,status,contentDetails",
					"pageToken": pageToken
				}
			})
			this.nextPageToken = response.data.nextPageToken ? response.data.nextPageToken : this.showMore = false
			this.reviews.push(...response.data.items);
		},
	}
}
</script>