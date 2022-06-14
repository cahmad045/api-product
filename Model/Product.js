//const mongoose = require('mongoose');
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    ProductName:
    {
        type: String,
        required: true,
    },
    Price:
    {
        type: Number,
        required:true,
    },
    Description:
    {
        type:String,
        required:true,
    },
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;