const models = require('../models/userModel');

class UserController {
    constructor() {}

    createUser = async (req, res) => {
        let data = await req.body;
        let index = await models.get({username: data.username})
        if (index === null) {
            let result = await models.create(data)
            res.send(result);
            return 1
        } else { 
            res.send('username already exists ')
            return 0
        }
    }

    getAll = async (req, res) => {
        let result = await models.getAll();
        res.json(result);
    }

    update = async (req, res) => {
        let id = await req.query;
        console.log(`id ${id}`);
        let data = await req.body
        console.log(`data ${data}`);
        let index = await models.get({_id: id})
        if (index === null) { res.send('id not found')}
        else { await models.update({_id: id}, data);
            res.send('updated successfully')}
    }

    delete = async (req, res) => {
        let id = await req.params;
        await models.delete({_id: id})
        res.send('deleted successfully')
    }
    
}

module.exports = new UserController;