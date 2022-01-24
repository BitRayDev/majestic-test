<template>
	<h1>Новый пост</h1>
	<form @submit.prevent="addPost">
		<textarea
			name="text"
			placeholder="Текст поста"
			v-model="postText"
		/>
		<input type="submit" value="Отправить пост" />
	</form>
    
</template>

<script>
	import axios from "axios";

	export default {
		data: function () {
			return {
				postText: ""
			};
		},
		methods: {
			addPost: function (event) {
				axios
					.post(`https://demo.bitraydev.xyz/majestic/api/posts`, {
                        text: this.postText
                    }, {
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
	form {
		display: flex;
		flex-direction: column;
		width: 150px;
		gap: 5px;
	}
</style>
