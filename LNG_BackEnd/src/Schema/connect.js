const mongoose = require('mongoose');
class database {
    constructor() {}
    connect = async () => {
        await mongoose.connect(
            "mongodb+srv://Web63_atlas:Web63atlas@cluster0.wntgsqq.mongodb.net/LNG"
        )
    }
}

module.exports = database;