require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express()

// app.use('/public/images' ,express.static(path.join(_dirname, '../public/images')))

app.use('/public',express.static(path.join(__dirname, '../newfolder/')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 5040

app.listen(port ,() => { console.log(`Listening on port ${port}`)})