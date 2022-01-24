<template>
	<h1>Регистрация</h1>
	<form @submit.prevent="register($event)" ref="registerForm">
		<input name="login" type="text" placeholder="Логин" v-model="inputLogin" />
		<input
			name="password"
			type="text"
			placeholder="Пароль"
			v-model="inputPassword"
		/>
		<input type="submit" value="Зарегистрироваться" />
	</form>
    
</template>

<script>
	import axios from "axios";

	export default {
		data: function () {
			return {
				inputLogin: "",
				inputPassword: "",
			};
		},
		methods: {
			register: function (event) {
				axios
					.post(`http://localhost:5555/register`, {
						login: this.inputLogin,
						password: this.inputPassword,
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
