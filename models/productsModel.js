const mongoose = require("../config/mongodb")

const productsSchema = mongoose.Schema({
    title: String,
    price: Number, 
    description: String, 
    quantity: Number, 
    status: String,
});

const ProductsModel = mongoose.model("Productos", productsSchema);

module.exports = ProductsModel