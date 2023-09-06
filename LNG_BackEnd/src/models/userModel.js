const mongoose = require('mongoose');
const Base = require('./baseModel');
const UserSchema = require('../Schema/userSchema');

class UserModel extends Base {
    constructor() {
         super();
         this.init('users', UserSchema)
    }


}

module.exports = new UserModel