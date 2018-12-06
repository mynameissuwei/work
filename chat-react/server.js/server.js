const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./mongoose')
const Chat = model.getModel('chat')
const app = express()
const port = 8090

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',(socket) => {
	socket.on('sendMsg',(data) => {
		const  { from,to,msg } = data
		const chatid = [from,to].sort().join('_')
		Chat.create({chatid,from,to,content:msg},(e,d) => {
			io.emit('recMsg',d)
		})
	})
})

app.use(cookieParser())

app.use(bodyParser.json())

app.use('/user',router)



server.listen(port,() => {
	console.log('it works')
})