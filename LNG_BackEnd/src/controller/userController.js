const models = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {privateKey} = require('../middleware/validateToken');

const saltRounds = 10

class UserController {
    constructor() {}

    hashPassword = (plainPass) => {
        let hash = bcrypt.hashSync(plainPass, saltRounds);
        return hash;
      };

    login = async (req, res) => {
        let {username, password} = await req.body;
        if (!username || !password) { res.send('Invalid username or password')}
        else {
            let user = await models.get({username: username});
            if (user && user !== null) {
                let checkPassword = await bcrypt.compareSync(password, user.password);
                if (checkPassword) {
                    let token = jwt.sign({username: user.username, email: user.email}, privateKey);
                    res.send({existed: true, token: token, user: user, message: "Found"})
                } else {
                    res.send({ existed: false, token: "", message: "Password is wrong" });
                }
            } else {
                res.send({ existed: false, token: "", message: "User does not exist" });
            }
        }
    }

    createUser = async (req, res) => {
        let data = await req.body;
        let index = await models.get({username: data.username})
        console.log(index);
        if (index === null) {
            data.password = this.hashPassword(data.password)
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
        let _id = await req.params;
        let data = await req.body;
        let index = await models.get({_id: _id})
        console.log(index);
        if (index === null) { res.send('id not found')}
        else { await models.update(_id, data);
            res.send('updated successfully')}
    }

    // updatePassword = async (req, res) => {
    //     let {_id, password, newPassword}= await req.body;
    //     let user = await models.get({_id: _id})
    //     let checkPassword = await bcrypt.compareSync(password, user.password);
    //     if (checkPassword) {
    //         user.password = this.hashPassword(newPassword)
    //         await models.update(_id, password)
    //     } else { res.send('password not found')}
    // }

    delete = async (req, res) => {
        let data = await req.body;    
        await models.delete(data)
        res.send('deleted successfully')
    }
    
}

module.exports = new UserController;