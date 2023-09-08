const exp = require('express');
const router = exp.Router();
const controller = require('../controller/controlProtection_controller');
const checkProtection = require('../middleware/checkProtection')

router.use(exp.json());

router.get('/', controller.getAll);
router.post('/create', checkProtection, controller.createData);
router.patch('/update', checkProtection, controller.updateData);
router.delete('/delete', checkProtection, controller.deleteData);

module.exports = router;