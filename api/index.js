const express = require('express')
const app = express ()

app.get('*', (req, res) =>{
    console.log('Hello World! Mi aplicación serverless');
    res.send({mensaje: 'chanchito feliz'})
}) 

module.exports = app