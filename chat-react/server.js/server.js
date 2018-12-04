const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = 8090

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',(socket) => {
	console.log('user login')
	socket.on('sendMsg',(data) => {
		console.log(data)
		io.emit('recMsg',data)
	})
})

app.use(cookieParser())

app.use(bodyParser.json())

app.use('/user',router)



server.listen(port,() => {
	console.log('it works')
})