const express = require('express');
const router = express.Router();
const controller = require('../controller/userController')
const {validateToken} = require('../middleware/validateToken');
const checkAdmin = require('../middleware/checkAdmin')

router.use(express.json());

router.get('/login', controller.login)
router.get('/add', validateToken, checkAdmin, controller.getAll)
router.post('/create', controller.createUser);
router.patch('/update/:_id', controller.update);
// router.patch('/password', controller.updatePassword);
router.delete('/delete',validateToken, checkAdmin, controller.delete);


module.exports = router;