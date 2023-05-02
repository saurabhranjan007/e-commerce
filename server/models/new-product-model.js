const mongoose = require('mongoose')
const schema = mongoose.Schema

const new_product = new schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    cover: { type: String, required: false }
})

new_product.set("toObject", { getters: true })
module.exports = mongoose.model("newProduct", new_product)
