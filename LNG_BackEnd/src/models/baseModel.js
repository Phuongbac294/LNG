const {default: mongoose} = require('mongoose');

class Base {
    constructor() {}

    init(name, schema) {
        this.model = mongoose.model(name, schema);
    }

    getAll() {
        let query = this.model.find();
        return query.exec();
    }

    get(name) {
        let query = this.model.findOne(name);
        return query.exec();
    }

    create(data) {
        let result = this.model.create(data);
        return result;
    }

    update(id, data) {
        let result = this.model.updateOne(id, data);
        return result;
    }

    delete(name) {
        let result = this.model.deleteOne(name);
        return result;
    }
}

module.exports = Base;