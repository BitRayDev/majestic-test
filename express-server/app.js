const express = require('express');
const session = require('express-session');
var cors = require('cors');
const { loginRouter } = require('./routes/login.route');
const { registerRouter } = require('./routes/register.route');
const { postsRouter } = require('./routes/posts.route');
const { postRouter } = require('./routes/post.route');
const cookieParser = require('cookie-parser');

const port = 5555
const app = express()

app.use(cors({
    credentials: true, 
    origin: "http://localhost:8080"
}))

app.use(cookieParser());
app.use(express.json());
app.use(session({
    secret: 'majestic',
    resave: true,
    saveUninitialized: true
}))

app.use(loginRouter);
app.use(registerRouter);
app.use(postsRouter);
app.use(postRouter);

app.listen(port, () => {
    console.log(`Сервер запущен по адресу: http://localhost:${port}`)
})