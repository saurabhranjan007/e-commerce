const mongoose = require('mongoose')
const schema = mongoose.Schema

const login_user = new schema({
    fullName: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true }, 
    email: { type: String, required: true }
})

login_user.set("toObject", { getters: true })
module.exports = mongoose.model("loginUser", login_user)
