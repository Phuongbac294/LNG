const express = require('express');
const router = express.Router();
const controller = require('../controller/userController')
const {validateToken} = require('../middleware/validateToken');

router.use(express.json());

router.get('/login', controller.login)
router.get('/', (req, res) => {res.send("Welcome to the user!")});
router.get('/add', validateToken, controller.getAll)
router.post('/create', controller.createUser);
router.patch('/update/:_id', controller.update);
// router.patch('/password', controller.updatePassword);
router.delete('/delete', controller.delete);


module.exports = router;