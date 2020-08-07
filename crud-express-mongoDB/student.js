const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/realme',{useNewUrlParser: true, useUnifiedTopology: true})

var studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
})




// 这个不用注释，这个是Lsxs的申明
module.exports = mongoose.model("Student", studentSchema)





