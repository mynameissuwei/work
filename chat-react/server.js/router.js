const express = require('express')
const router = express.Router()
const model = require('./mongoose')
const User = model.getModel('user')
const Chat = model.getModel('chat')
const utility = require('utility')

// Chat.remove({},(err,doc)=>{})


const Utility = (pwd) => {
	return utility.md5(utility.md5(pwd + 'wanghuan'))
}

router.get('/list',function(req,res) {
	// User.remove({},(err,doc)=>{})
	const { type } = req.query
	User.find({type},function(err,doc){
		return res.json(doc)
	})
})

router.post('/update',(req,res) => {
	const userid = req.cookies.userid
	User.findOneAndUpdate({_id:userid},req.body,{ new: true },(e,d) => {
		console.log(d)
		return res.json({code:0,data:d})
	})
})

router.use('/info',(req,res) => {
	const { userid } = req.cookies
	if(!userid) return res.json({code:1,msg:'no cookie'})
	User.findOne({_id:userid},(e,d) => {
		if(e) return res.json({code:1,msg:'no data in database'})
		if(d) return res.json({code:0,data:d})
	})
})

router.use('/register',(req,res) => {
	const { user,pwd,type } = req.body
	User.findOne({user},(e,d) => {
		if(d) return res.json({code:1,msg:'用户名重复,请从新输入用户名'})
		const userModel = new User({user,type,pwd})
		userModel.save(function(e,d){
			if(e) {
				return res.json({code:1,msg:'后端出错了'})
			}
			const { user,type,_id } = d
			res.cookie('userid',_id)
			return res.json({code:0,data:{user,type,_id}})
		})
	})
})

router.use('/login',(req,res) => {
	const { user,pwd } = req.body
	User.findOne({user,pwd},{'pwd':0},(err,doc) => {
		if(!doc) return res.json({code:1,msg:'please register'})
			console.log(doc)
			res.cookie('userid',doc._id)
			return res.json({code:0,data:doc})
	})
})

router.use('/msgList',(req,res) => {
	const user = req.cookies.userid

	User.find({},(e,d) => {
		let users = {}
		d.forEach(v=>{
			users[v._id] = {name:v.user,avatar:v.avator}
		})
		Chat.find({'$or':[{from:user},{to:user}]},(e,d) => {
			if(!e) {
				return res.json({code:0,chatMsg:d,users:users})
			}
		})
	})
})

router.post('/readMsg',(req,res) => {
	const userId = req.cookies.userid
	const {from} = req.body
	Chat.update({from,to:userId},{'$set':{read:true}},{'multi':true},(err,doc) => {
		console.log(doc)
		if(!err) {
			return res.json({code:0,num:doc.nModified})
		}
		return res.json({code:1,msg:'fail'})
	})
})

module.exports =  router 