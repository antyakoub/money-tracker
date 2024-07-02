const mongoose = require("mongoose");
const {Schema, model} = "mongoose"; 


const TransactionSchema = mongoose.Schema({
    name: {type: String, required:true},
    price: {type: Number, required:true},
    description: {type: String, required:true},
    datetime: {type: Date, required:true},

});

const TransactionModel = mongoose.model('Transaction', TransactionSchema);

module.exports = TransactionModel