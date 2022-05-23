const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

    firstName : {
        type : String,
        required : true
    },

    lastName : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    phoneNumber : {
        type : Number,
        required : true
    },

    AddressOne : {
        type : String,
        required : true
    },

    AddressTwo : {
        type : String,
        required : true
    },

    townCity : {
        type : String,
        required : true
    },

    country : {
        type : String,
        required : true
    },

    cardHolderName : {
        type : String,
        required : true
    },

    cardNumber : {
        type : Number,
        required : true
    },

    expMonth : {
        type : Number,
        required : true
    },

    expYear : {
        type : Number,
        required : true
    },

    cvcNumber : {
        type : Number,
        required : true
    },
})

const Payment = mongoose.model("paymentrecord",PaymentSchema);

module.exports = Payment;