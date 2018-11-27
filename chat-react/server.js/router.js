const express = require('express')
const router = express.Router()
const model = require('./mongoose')
const User = model.getModel('user')
const utility = require('utility')

const Utility = (pwd) => {
	return utility.md5(utility.md5(pwd + 'wanghuan'))
}

router.get('/list',function(req,res) {
	// User.remove({},(err,doc)=>{})
	User.find({},function(err,doc){
		return res.json(doc)
	})
})

// router.post('/update',(req,res) => {
// 	const userid = req.cookies.userid
// 	if(!userid) {
// 		return json.dumps({code:1})
// 	}
// 	const body = req.body
// 	User.findByIdAndUpdata(userid,body,function(err,doc){
// 		const data = Object.assign({},{
// 			user:doc.user,
// 			type:doc.type
// 		},body)
// 		return res.json({code:0,data})
// 	})
// })
	
router.use('/info',(req,res) => {
	// const { userid } = req.cookie
	// if(!userid) return res.json({code:1,msg:'no cookie'})
	// User.findOne({_id:userid},(e,d) => {
	// 	if(e) return res.json({code:1,msg:'no data in database'})
	// 	if(d) return res.json({code:0,data:d})
	// })
	return res.json({code:1})
})

router.use('/login',(req,res) => {
	console.log(req.body)
	const { user,pwd } = req.body
	User.findOne({user,pwd:Utility(pwd)},{'pwd':0},(err,doc) => {
		if(!doc) return res.json({code:1,msg:'wrong username and password'})
			res.cookie('userid',doc._id)
			return res.json({code:0,data:doc})
	})
})


router.post('/register',(req,res) => {
	console.log(req.body)
	const { user,pwd,type } = req.body
	User.findOne({user},(err,doc) => {
		if(doc) return res.json({code:1,msg:'username repeat'})
			User.create({user,pwd:Utility(pwd),type},(e,d) => {
				if(e) return res.json({code:1,msg:'data wrong'})
					return res.json({code:0})
			})
	})
})



module.exports =  router 