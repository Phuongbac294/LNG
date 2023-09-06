const express = require('express');
const router = express.Router();
const controller = require('../controller/userController')

router.use(express.json());

router.get('/', (req, res) => {res.send("Welcome to the user!")});
router.get('/add', controller.getAll)
router.post('/create', controller.createUser);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete)

module.exports = router;