<template>
	<h1>Все посты</h1>
    <Post v-for="post in posts" :post="post">
        <router-link :to="`/posts/${post.id}`"><button>Подробнее</button></router-link>
    </Post>
    
</template>

<script>
	import axios from "axios";

    import Post from '../components/PostComponent.vue';

	export default {
        components: {
            Post
        },
		data: function () {
			return {
				posts: []
			};
		},
        mounted: function() {
            axios
                .get(`http://localhost:5555/posts`, {
                        withCredentials: true   
                    })
                .then((response) => {
                    this.posts = response.data;
                    console.log(response.data);
                });
        }
	};
</script>

<style>
</style>
