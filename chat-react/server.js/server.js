const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = 8090

app.use(bodyParser.json())

app.use(cookieParser())

app.use('/user',router)



app.listen(port,() => {
	console.log('it works')
})