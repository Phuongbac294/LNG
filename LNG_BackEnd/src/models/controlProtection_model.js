const mongoose = require('mongoose');
const Base = require('./baseModel');
const ProtectionSchema = require('../Schema/controlProtection_Schema');

class ControlProtectionModel extends Base {
    constructor() {
        super();
        this.init('controlProtection', ProtectionSchema)
    }
}

module.exports = new ControlProtectionModel;