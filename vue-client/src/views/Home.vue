<template>
  <div class="home">
      <router-link to="/register">Регистрация</router-link>
      <router-link to="/login">Вход</router-link>
      <router-link to="/addpost">Новый пост</router-link>
      <router-link to="/posts">Все посты</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="stylus">
    .home {
        display: flex;
        flex-direction: column;
    }
</style>
