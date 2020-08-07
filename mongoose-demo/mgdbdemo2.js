const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/realme',{useNewUrlParser: true, useUnifiedTopology: true})

var userSchmea = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String
	}
})

// 新增数据

// 这个不用注释，这个是Lsxs的申明
var Lsxs = mongoose.model("Lsxs", userSchmea)
// 需要注释掉，这个运行成功一次就会插入一次
var admin = new Lsxs({
	username: 'drlsxs',
	password: '00012',
	email: 'admin@admin.com'
})

admin.save(function(err,ret){
	if(err){
		console.log('保存失败')
	}else{
		console.log('保存成功')
		console.log(ret)
	}
})


// 查询数据
// 查询所有
Lsxs.findOne(function(err,ret){
	if(err){
		console.log('查询失败')
	}else{
		console.log('查询成功')
		
		console.log(ret)
	}
})

// 按需查询
// Lsxs.findOne({
// 	username:"drlsxs"
// },function(err,ret){
// 	if(err){
// 		console.log('查询失败')
// 	}else{
// 		console.log('查询成功')
// 		console.log(ret)
// 	}
// })


// 删除数据
/*Lsxs.remove({
	password: "00012"
},function(err){
	if(err){
		console.log('删除失败')
	}else{
		console.log('删除成功')
	}
})*/




// 修改数据
// Lsxs.findByIdAndUpdate('5f2cf39c41206e1f64f1c3aa', {
// 	password: ",00x17'",
// 	email:'yangjacl@gmax.com'
// },function(err){
// 	if(err){
// 		console.log('更新失败')
// 	}else{
// 		console.log('更新成功')
// 	}
// })


