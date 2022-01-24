var express = require('express');
const { deletePost, getPost } = require('../controllers/post.controller');

var router = express.Router();

router.delete('/posts/:id', deletePost);
router.get('/posts/:id', getPost);

module.exports = {
    postRouter: router
};