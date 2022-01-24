var express = require('express');
const { addPost, getPosts } = require('../controllers/posts.controller');

var router = express.Router();

router.post('/posts', addPost);
router.get('/posts', getPosts);

module.exports = {
    postsRouter: router
};