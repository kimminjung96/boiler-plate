const mongoose = require("mongoose");

//model은 Schema를 감싸는 역할, Schema는 정보
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //뛰어쓰기를 없애주는 역할
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    //유저 인지 관리자인지 역할지정
    type: Number,
    default: 0, //일반유저
  },
  image: String,
  token: {
    //유효성
    type: String,
  },
  tokenExp: {
    //유효기간
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
