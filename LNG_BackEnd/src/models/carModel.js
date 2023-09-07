const mongoose = require('mongoose');
const Base = require('./baseModel');
const CarSchema = require('../Schema/carSchema');
 class CarModel extends Base {
    constructor() {
        super();
        this.init('car',CarSchema);
    }
 }

 module.exports = new CarModel;
