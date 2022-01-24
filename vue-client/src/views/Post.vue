<template>
	<h3>Пост под ID {{ post.id }}</h3>
	<Post :post="post"></Post>
</template>

<script>
	import axios from "axios";

	import Post from "../components/PostComponent.vue";

	export default {
        components: {
            Post
        },
		data: function () {
			return {
				post: {}
			};
		},
        mounted: function() {
            axios
                .get(`http://localhost:5555/posts/${this.$route.params.id}`, {
                        withCredentials: true   
                    })
                .then((response) => {
                    this.post = response.data;
                });
        },
	};
</script>

<style>
</style>
