const exp = require('express');
const router = exp.Router();
const controller = require('../controller/carContrller');
const checkCar = require('../middleware/checkCar')

router.use(exp.json());

router.get('/', controller.getAll);
router.post('/create', checkCar, controller.createData);
router.patch('/update', checkCar, controller.updateData);
router.delete('/delete', checkCar, controller.deleteData);

module.exports = router;