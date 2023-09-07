const models = require('../models/carModel');

class CarController {
    constructor() {}

    getAll = async (req, res) => {
        let result = await models.getAll();
        res.send(result);
    }

    createData = async (req, res) => {
        let data = await req.body;
        let result = await models.create(data);
        res.send(result);
    }

    updateData = async (req, res) => {
        let _id = await req.params;
        let data = await req.body;
        let index = await models.get({_id: _id})
        console.log(index);
        if (index === null) { res.send('id not found')}
        else { await models.update(_id, data);
            res.send('updated successfully')}
    }

    deleteData = async (req, res) => {
        let data = await req.body;    
        await models.delete(data)
        res.send('deleted successfully')
    }
}

module.exports = new CarController;
