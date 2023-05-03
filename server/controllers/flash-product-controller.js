const flashProduct = require("../models/flash-data-model")

// CREATE 
const createProduct = async(req, res) => {
    console.log("Inside create flash product!!");

    const req_data = req.body;
    console.log(`req data for new product ${req_data}`);

    try {
        console.log('Inside try');
        const saveProductCall = new flashProduct({
            name: req_data.name,
            price: req_data.price,
            cover: req_data.cover,
            discount: req_data.discount
        })

        const data = await saveProductCall.save(); 

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
    console.log("Inside get all flash products");

    try {
        console.log(`getting all the products from productSchema`);

        const getAll = await flashProduct.find().exec()
        console.log(`all flash product data ${getAll.length}`);

        return res.status(200).json({
            message: "All flash product data",
            data: getAll
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
    console.log("Inside delete flash product");

    const reqData = req.body
    console.log(`req data id ${reqData}`);

    try {
        console.log(`inside del for ${reqData.id}`);

        const delCall = await flashProduct.deleteOne({ _id: reqData.id }).exec(); 
        console.log(`delete product res: ${delCall}`);

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