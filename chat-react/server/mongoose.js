const mongoose = require('mongoose')

const DB_url = 'mongodb://127.0.0.1:27017'

mongoose.connect(DB_url)

const db = mongoose.connection

db.on('connected',function() {
	console.log('i love you')
})

db.on('error',function(err) {
	console.log('the error is' + err)
})

db.on('disconneted',function() {
	console.log('the connect is disconnected')
})

// var userInfo = new mongoose.Schema({
// 	name:String,
// 	pwd:Number,
// 	type:String	
// })

// var user = mongoose.model('user',userInfo)

// var suwei = new user({
// 	name:'suwei',
// 	pwd:1996728,
// 	type:'Hero'
// })

const models = {
	user:{
		'user':{type:String, require:true},
		'pwd':{type:String, require:true},
		'type':{type:String, require:true},
		'avator':{type:String},
		'job':{type:String},
		'demand':{type:String}, 
		'company':{type:String}, 
		'salary':{type:String},	
	},
	chat:{
		'chatid':{'type':String,'require':true},
		'from':{'type':String,'require':true},
		'to':{'type':String,'require':true},
		'read':{'type':Boolean,'default':false},
		'content':{'type':String,'require':true,'default':''},
		'create_time':{'type':Number,'default':new Date().getTime()}
	}
}

for(let m in models) {
	mongoose.model(m,new mongoose.Schema(models[m]))
}

 module.exports = {
 	getModel:function(name) {
 		return mongoose.model(name)
 	}
 }


// var Schema = mongoose.Schema

// var userSchema = new Schema({
// 	username : {type:String},
// 	userpwd : {type:Number},
// 	userdate : {type:Date}
// })

// var User = mongoose.model('User', userSchema)

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


// var User = require('./server.js')


// function insert() {

// 	var user = new User({
// 		username : 'suwei',
// 		userpwd : 123456,
// 		userdate : new Date()
// 	})

// 	user.save(function (err, res) {

// 	    if (err) {
// 	        console.log("Error:" + err);
// 	    }
// 	    else {
// 	        console.log("Res:" + res);
// 	    }

// 	});
// }

// insert()