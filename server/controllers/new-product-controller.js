const newProduct = require("../models/new-product-model")

// CREATE 
const createProduct = async(req, res) => {
    console.log("Inside create new product!!");

    const req_data = req.body;
    console.log(`req data for new product ${req_data.name}`);

    try {
        console.log('Inside try');
        const add_product = new newProduct({
            name: req_data.name,
            price: req_data.price,
            cover: req_data.cover,
        })

        const data = await add_product.save(); 

        return res.status(200).json({
            message: "New Product Added",
            id: data._id
        })

    } catch (err) {
        console.error(`error occured while saving the product: ${err}`);       
        return res.status(500).json({
            message: "Error in saving data",
            error: `${err}`
        })
    }
}

// GET (all)
const getAllProducts = async(req, res) => {
    console.log("Inside get all products");

    try {
        console.log(`getting all the products from productSchema`);

        const get_product = await newProduct.find().exec()
        console.log(`all new product data ${get_product.length}`);

        return res.status(200).json({
            message: "All new product data",
            data: get_product
        })
        
    } catch (err) {
        console.error(`error in getting products data ${err}`);
        return res.status(500).json({
            message: 'error in getting products data',
            error: `${err}`
        })
    }
}

// DELETE 
const deleteProduct = async(req, res) => {
    console.log("Inside delete product");

    const reqData = req.body
    console.log(`req data id ${reqData}`);

    try {
        console.log(`inside del for ${reqData.id}`);

        const del_product = await newProduct.deleteOne({ _id: reqData.id }).exec(); 
        console.log(`delete product res: ${del_product}`);

        return res.status(200).json({
            message: `Product Deleted: id - ${reqData.id}`
        })

    } catch (err) {
        console.error(`error in del product: ${err}`);
        return res.status(500).json({
            message: `error in deleting product, id ${reqData.id}`,
            error: `${err}`
        })
    }
}

exports.createProduct = createProduct; 
exports.deleteProduct = deleteProduct; 
exports.getAllProducts = getAllProducts; 