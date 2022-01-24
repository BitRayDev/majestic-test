<template>
	<h1>Вход</h1>
    <div v-if="this.$store.state.isLoggedIn">
        <h2>Вы вошли в аккаунт!</h2>
        <button @click="logout">Выйти</button>
    </div>
	<form v-if="!this.$store.state.isLoggedIn" @submit.prevent="login($event)" ref="registerForm">
		<input name="login" type="text" placeholder="Логин" v-model="inputLogin" />
		<input
			name="password"
			type="text"
			placeholder="Пароль"
			v-model="inputPassword"
		/>
		<input type="submit" value="Войти" />
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
			login: function (event) {
				axios
					.post(`https://demo.bitraydev.xyz/majestic/api/login`, {
						login: this.inputLogin,
						password: this.inputPassword,
					}, {
                        withCredentials: true
                    })
					.then((response) => {
						if(response.status == 200) {
                            this.$store.commit('logIn');
                        }
					});
			},
            logout: function() {
                axios
					.get(`https://demo.bitraydev.xyz/majestic/api/logout`, {
                        withCredentials: true   
                    })
					.then((response) => {
                        if(response.status == 200) {
                            this.$store.commit('logOut');
                        }
					});
            }
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
