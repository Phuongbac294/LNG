const exp = require('express');
const router = exp.Router();
const controller = require('../controller/carContrller');

router.use(exp.json());

router.get('/', controller.getAll);
router.post('/create', controller.createData);
router.patch('/update', controller.updateData);
router.delete('/delete', controller.deleteData);

module.exports = router;