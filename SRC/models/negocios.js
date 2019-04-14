
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Negocios_Schema = new Schema ({
    Name: String,
    Address: String,
    Email: String,
    Phone: Number,
    Category: String,
    Status: {
         type: Boolean,
         default: false
    }
});





module.exports = mongoose.model('negocios', Negocios_Schema);