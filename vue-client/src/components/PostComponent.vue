<template>
	<div class="post">
        <p>{{ post.text }}</p>
        <h6>Автор: {{ post.author_login }}</h6>
        <button @click="deletePost(post)">Удалить</button>
        <slot/>
    </div>
</template>

<script>
	import axios from "axios";

	export default {
		props: ['post'],
		methods: {
			deletePost: function (post) {
				axios
                    .delete(`http://localhost:5555/posts/${this.post.id}`, {
                        withCredentials: true   
                    })
                    .then((response) => {
                        console.log(response);
                    });
			},
		},
	};
</script>

<style>
	.post {
		padding: 20px;
        background-color: azure;
	}
</style>
