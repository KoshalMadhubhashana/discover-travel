const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Admin = new Schema({
  message: {
    type: String,
  },
  name: {
    type: String,
  },
  phoneNumber: {
    type: Number
  },
  email: {
    type: String
  },
  nic: {
    type: String
  },
  nationality: {
    type: String
  },
  homeTown: {
    type: String
  },
  country: {
    type: String
  }
});

const newAdmin = mongoose.model("admin", Admin); //create database collection

module.exports = newAdmin;