const { default: mongoose } = require("mongoose");

const { ObjectId } = require("bson");

const ProtectionSchema = new mongoose.Schema({
    date: Date,
    carNumber: String,
    drivername: String,
    status: String,
    bottle_12_AP: {bark: Number, goods: Number},
    bottle_12_GD: {bark: Number, goods: Number},
    bottle_12: {Sh: Number, Ad: Number, Hh: Number, Tl: Number, Vn: Number, Ptr: Number, others: Number},
    bottle_45_AP: {bark_1: Number, goods_1: Number, bark_2: Number, goods_2: Number},
    bottle_45: {Gd: Number, others: Number,},
    createdByName: String,
    createdById: ObjectId,
})

module.exports = ProtectionSchema;