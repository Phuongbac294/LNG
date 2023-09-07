const { default: mongoose } = require("mongoose");

const { ObjectID } = require("bson");

const CarSchema = new mongoose.Schema({
    carNumber: String,
    name: String,
    company: String,
    date: Date,
    // createdBy: ObjectID,
    // items: Array.of(ObjectID)
})

module.exports = CarSchema;