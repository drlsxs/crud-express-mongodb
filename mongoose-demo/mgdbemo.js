
// 创建一个模型，设计数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// 实例化一个Cat数据库
const Cat = mongoose.model('Cat', { name: String });





for(var i=0; i<10;i++){
	const kitty = new Cat({ name: 'Zildjian' +1 });
	kitty.save().then(() => console.log('meow'));


}
