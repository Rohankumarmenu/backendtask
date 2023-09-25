require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose')
const express = require('express');
const app = express();
require('./db/conn.js')
app.use(express.json());
app.use(require('./router/auth.js'));
const PORT=process.env.PORT;




const middleware = (req, res, next) => {
    console.log("Hello my middleware")
    next()
}

app.get('/signin', (req, res) => {
    res.send('Hi from the signin server');
})

app.get('/signup', (req, res) => {
    res.send('Hi from signup  server');
})



app.listen(PORT, () => {
    console.log(`server is running at port ${PORT} `);
})

