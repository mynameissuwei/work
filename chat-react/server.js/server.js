const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = 8090

// User.create({
// 	username:'suwei',
// 	userpwd:1996728,
// 	userdate:new Date()
// },function(err,doc) {
// 	if(!err) {
// 		console.log(doc)
// 	} else {
// 		console.log(err)
// 	}
// })

// User.remove({username:'suwei'},function(err,doc) {
// 	if(!err) { 
// 		console.log(doc)
// 	}
// }) 
app.use(bodyParser.json())

app.use(cookieParser())

app.use('/user',router)



app.listen(port,() => {
	console.log('it works')
})