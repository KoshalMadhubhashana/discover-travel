const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Activity = new Schema({
    activityName: {
        type: String,
    },
    activityDescription: {
        type: String,
    },
    activityPrice: {
        type: String,
    },
    activityImage: {
        type: String,
    },
});

const newActivity = mongoose.model("activity", Activity); //create database collection

module.exports = newActivity;