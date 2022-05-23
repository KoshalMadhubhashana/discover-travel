const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Insuarance = new Schema({
  itype: {
    type: String
  },
  iDescription: {
    type: String
  },
  iDate: {
    type: String
  },
  iCatergory: {
    type: String
  }
});

const newInsuarance = mongoose.model("insuarance", Insuarance); //create database collection

module.exports = newInsuarance;