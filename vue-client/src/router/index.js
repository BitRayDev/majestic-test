import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'
import AddPost from '../views/AddPost.vue'
import { store } from '../main'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/addpost',
        name: 'AddPost',
        component: AddPost,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/posts/:id',
        name: 'Post',
        component: Post,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.isLoggedIn) {
            next({ name: 'Login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
