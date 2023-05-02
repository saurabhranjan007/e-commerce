const mongoose = require('mongoose')
const schema = mongoose.Schema


const flash_product = new schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    cover: { type: String, required: true }
})

flash_product.set("toObject", { getters: true })
module.exports = mongoose.model("flashProduct", flash_product)
